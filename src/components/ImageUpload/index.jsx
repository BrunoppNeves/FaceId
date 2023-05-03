import React, { useEffect } from "react";

import { EnviaFotoContainer } from "./style";

export default function ImageUpload(props) {
  useEffect(() => {
    const newImageUrls = [];
    props.images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    props.setImageURLs(newImageUrls);
    console.log(props.images);
  }, [props.images]);

  function onImageChange(e) {
    props.setImages([...e.target.files]);
  }

  return (
    <EnviaFotoContainer>
      <input type="file" multiple accept="image/png" onChange={onImageChange} />
      {props.imageURLs.map((imageSrc) => (
        <img src={imageSrc} alt="uploaded" />
      ))}
    </EnviaFotoContainer>
  );
}
