import { Image, ImagesContainer } from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const NewImages = ({ newImage,setNewImage }) => {
  const deleteImageDownloaded = (id) => {
    setNewImage(newImage.filter((image) => image.link !== id));
  }
  return (
    <ImagesContainer>
      {newImage.map((element, index) => (
        <Image key={index} onClick={() => deleteImageDownloaded(element.link)}>
          <img src={element.link} alt={element.name} />
          <a href={element.link} download={element.name}>
            <FontAwesomeIcon
              style={{
                color: "#fff",
                fontSize: "30px",
              }}
              icon={faDownload}
            />
          </a>
        </Image>
      ))}
    </ImagesContainer>
  );
};

export default NewImages;