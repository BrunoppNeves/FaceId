import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import api from "../../services/api";
import { Container } from "./style";

export default function ReconhecimentoFacial() {
  const porcentagem = 60;
  const videoHeight = window.innerHeight * (porcentagem / 100);
  const videoWidth = window.innerWidth * (porcentagem / 100);
  const [initializing, setInitializing] = React.useState(false);
  const videoRef = useRef();
  const canvasRef = useRef();
  const token = localStorage.getItem("token");
  const [pastas, setPastas] = useState([]);
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    getImages();
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + "/models";
      setInitializing(true);
      Promise.all([
        await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        await faceapi.nets.mtcnn.loadFromUri(MODEL_URL),
        await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        await faceapi.nets.faceLandmark68TinyNet.loadFromUri(MODEL_URL),
        await faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL),
      ]).then(startVideo);
    };
    loadModels();
    loadLabels();
  }, []);

  const getImages = async () => {
    await api
      .get(`/images/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPastas(response.data.listaPastas);
        setFotos(response.data.listaFotos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registro = async (id) => {
    console.log(id, "esse é o id");
    await api.post(
      "/history/create",
      {
        userId: id,
        action: true,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        videoRef.current.srcObject = currentStream;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const loadLabels = () => {
    return Promise.all(
      pastas.map(async (label, key) => {
        const descriptions = [];
        for (let i = 0; i <= fotos[key].length - 1; i++) {
          const img = await faceapi.fetchImage(require(`../../assets/Persons/${label}/${fotos[key][i]}`));
          const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
          descriptions.push(detections.descriptor);
        }
        return new faceapi.LabeledFaceDescriptors(label, descriptions);
      })
    );
  };

  const handleVideoOnPlay = () => {
    setInterval(async () => {
      if (initializing) {
        setInitializing(false);
      }
      const displaySize = {
        width: videoWidth,
        height: videoHeight,
      };
      const labels = await loadLabels();
      faceapi.matchDimensions(canvasRef.current, displaySize);
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions()
        .withAgeAndGender()
        .withFaceDescriptors();
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      const faceMatcher = new faceapi.FaceMatcher(labels, 0.3);
      const results = resizedDetections.map((d) => faceMatcher.findBestMatch(d.descriptor));
      //if (results[0].label !== "unknown") await registro(results[0].label);
      console.log("aqui2");
      console.log(results[0].label);
      console.log("aqui3");
      //console.log(resizedDetections);
    }, 5000);
  };

  return (
    <Container>
      <video ref={videoRef} autoPlay muted height={videoHeight} width={videoWidth} onPlay={handleVideoOnPlay}>
        <canvas ref={canvasRef} />
      </video>
    </Container>
  );
}
