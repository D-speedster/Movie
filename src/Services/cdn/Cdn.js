import React, { useState, useEffect } from "react";

const UploadcareImage = ({ apiKey, imageUrl }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Load the image from Uploadcare
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setImage(img);
  }, [imageUrl]);

  return (
    <img src={image ? image.src : ""} alt="Image" />
  );
};

export default UploadcareImage;