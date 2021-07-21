import { Image, ImagesContainer } from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDownload} from '@fortawesome/free-solid-svg-icons'
const NewImages = ({ newImage }) => {
  return (
    <ImagesContainer>
      {newImage.map((element, index) => (
        <Image key={index}>
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
