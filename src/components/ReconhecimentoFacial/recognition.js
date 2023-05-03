import * as faceapi from "face-api.js";
const cam = document.getElementById("cam");

const startVideo = () => {
  navigator.mediaDevices.enumerateDevices().then((devices) => {
    if (Array.isArray(devices)) {
      devices.forEach((device) => {
        if (device.kind === "videoinput") {
          console.log(device);
          if (device.label.includes("")) {
            navigator.getUserMedia(
              {
                video: {
                  deviceId: device.deviceId,
                },
              },
              (stream) => (cam.srcObject = stream),
              (error) => console.log(error)
            );
          }
        }
      });
    }
  });
};

const loadLabels = () => {
  const labels = [];
  labels.push("Bruno");
  return Promise.all(
    labels.map(async (label) => {
      const descriptions = [];
      for (let i = 1; i <= 5; i++) {
        const img = await faceapi.fetchImage(`/assets/lib/labels/${label}/${i}.jpg`);
        const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
        descriptions.push(detections.descriptor);
      }
      return new faceapi.LabeledFaceDescriptors(label, descriptions);
    })
  );
};

Promise.all([(faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  faceapi.nets.faceExpressionNet.loadFromUri("/models"),
  faceapi.nets.ageGenderNet.loadFromUri("/models"),
  faceapi.nets.ssdMobilenetv1.loadFromUri("/models")),]).then(startVideo);

cam.addEventListener("play", async () => {
  const canvas = faceapi.createCanvasFromMedia(cam);
  const canvasSize = {
    width: cam.width,
    height: cam.height,
  };
  const labels = await loadLabels();

  faceapi.matchDimensions(canvas, canvasSize);
  document.body.appendChild(canvas);
  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(cam, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions()
      .withAgeAndGender()
      .withFaceDescriptors();
    const resizedDetections = faceapi.resizeResults(detections, canvasSize);
    const faceMatcher = new faceapi.FaceMatcher(labels, 0.4);
    const results = resizedDetections.map((d) => faceMatcher.findBestMatch(d.descriptor));
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    faceapi.draw.drawDetections(canvas, resizedDetections);
    //faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    //console.log(parseInt(results[0]._distance * 100));
    results.forEach((result, index) => {
      console.log(result.toString());
      console.log("aaaaaaaaaaaaaaa");
    });
  }, 100);
});

