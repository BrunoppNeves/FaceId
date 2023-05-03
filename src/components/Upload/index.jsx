import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Container, FotosContainer } from "./style";

export const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "transparent";
};

export default function UploadFotos(props) {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject, acceptedFiles } = useDropzone({
    accept: { "image/png": [] },
  });

  const [images, setImages] = useState([]);

  //   const createFolder = (id) => {
  //     const fotos = acceptedFiles.map((file) => {
  //       setImages(file);
  //     });
  //     console.log(images);
  //   };

  function onImageChange(e) {
    setImages([...e.target.files]);
    console.log(images);
  }

  const files = acceptedFiles.map((file) => <li key={file.path}>{file.path}</li>);

  return (
    <>
      <button>teste</button>
      <Container {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
        <input onChange={onImageChange} {...getInputProps()} />
        <p>Fotos do colaborador (jpeg)</p>
        <FotosContainer>
          <ul>{files}</ul>
        </FotosContainer>
      </Container>
    </>
  );
}
