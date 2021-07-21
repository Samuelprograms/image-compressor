import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMinusCircle } from "@fortawesome/free-solid-svg-icons";
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
    // handleCompress();
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
                    color: "red",
                    fontSize: "30px",
                  }}
                  icon={faMinusCircle}
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
          <label htmlFor="file">Select your images</label>
        </Input>
      )}
      {isUploaded && (
        <Button onClick={(e) => handleCompress(e)}>Compress</Button>
      )}
      {isCompressed && (
        <>
          <NewImages newImage={newImage} />
          <Button onClick={(e) => handleReset(e)}>Reset</Button>
        </>
      )}
    </Container>
  );
};
export default App;
