import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faPlus,
  faCompress,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import imageCompression from "browser-image-compression";
import NewImages from "./NewImages";
import { Container, Input, Image, ImagesContainer, Button } from "./components";

const App = () => {
  const [image, setImage] = useState([]);
  const [newImage, setNewImage] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isCompressed, setIsCompressed] = useState(false);

  const handleChangeImage = (e) => {
    e.preventDefault();
    let newData = [];
    const files = Object.values(e.target.files)
      .map(
        (file) =>
          file.name.endsWith(".png") ||
          file.name.endsWith(".jpg") ||
          file.name.endsWith(".tiff") ||
          file.name.endsWith(".psd") ||
          file.name.endsWith(".pjp") ||
          file.name.endsWith(".jfif") ||
          file.name.endsWith(".bmp") ||
          file.name.endsWith(".svg") ||
          file.name.endsWith(".gif") ||
          file.name.endsWith(".xbm") ||
          file.name.endsWith(".dib") ||
          file.name.endsWith(".jxl") ||
          file.name.endsWith(".jpeg") ||
          file.name.endsWith(".svgz") ||
          file.name.endsWith(".webp") ||
          file.name.endsWith(".ico") ||
          file.name.endsWith(".tif") ||
          file.name.endsWith(".pjpeg") ||
          file.name.endsWith(".avif")
      )
      .filter((file) => file === false);
    console.log(files.length);
    if (files.length > 0) {
      alert(`There are ${files.length} files with invalid extensions`);
    } else {
      Object.values(e.target.files).forEach((element) => {
        newData.push({
          image: element,
          link: URL.createObjectURL(element),
          name: element.name,
          size: element.size,
        });
      });
      setImage(newData);
      setIsUploaded(true);
      setIsCompressed(false);
    }
  };
  const handleCompress = () => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 500,
      useWebWorker: true,
    };
    image.forEach((element) => {
      if (element.size / 1024 <= options.maxSizeMB) {
        alert("Image is too small, can't be Compressed!");
        setIsCompressed(false);
        return;
      } else {
        let newData = [];
        imageCompression(element.image, options).then((output) => {
          const downloadLink = URL.createObjectURL(output);
          newData.push({
            link: downloadLink,
            name: element.name,
            size: output.size,
          });
        });
        setNewImage([...image, ...newData]);
      }
    });
    setIsCompressed(true);
  };
  const handleDeleteImage = (e, link) => {
    e.preventDefault();
    if (image.length === 1) {
      handleReset();
    } else {
      const oldData = [...image];
      const newData = oldData.filter((element) => element.link !== link);
      setImage(newData);
    }
  };
  const handleReset = () => {
    setImage([]);
    setNewImage([]);
    setIsCompressed(false);
    setIsUploaded(false);
  };

  useEffect(() => {
    setIsCompressed(false);
  }, [image]);

  return (
    <Container>
      {isUploaded ? (
        <ImagesContainer>
          {image.map((element, index) => (
            <Image key={index}>
              <img src={element.link} alt={element.name} />
              <button onClick={(e) => handleDeleteImage(e, element.link)}>
                <FontAwesomeIcon
                  style={{
                    color: "#fff",
                    fontSize: "35px",
                  }}
                  icon={faTimes}
                />
              </button>
            </Image>
          ))}
        </ImagesContainer>
      ) : (
        <Input>
          <input
            type="file"
            id="file"
            accept="image/*"
            multiple
            onChange={(e) => handleChangeImage(e)}
          />
          <label htmlFor="file">
            <FontAwesomeIcon
              style={{
                margin: "10px",
              }}
              icon={faPlus}
            />
            Select your images
          </label>
        </Input>
      )}
      {isUploaded && (
        <Button onClick={(e) => handleCompress(e)}>
          <FontAwesomeIcon
            style={{
              margin: "10px",
              fontSize: "20px",
            }}
            icon={faCompress}
          />
          Compress
        </Button>
      )}
      {isCompressed && (
        <>
          <NewImages newImage={newImage} setNewImage={setNewImage} />
          <Button onClick={(e) => handleReset(e)}>
            <FontAwesomeIcon
              style={{
                margin: "10px",
                fontSize: "20px",
              }}
              icon={faSyncAlt}
            />
            Reset
          </Button>
        </>
      )}
    </Container>
  );
};
export default App;
