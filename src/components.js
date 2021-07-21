import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://images.pexels.com/photos/2433985/pexels-photo-2433985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-size: cover;
  background-position: center center;
`;

const Input = styled.div`
  input {
    display: none;
  }
  label {
    padding: 10px 20px;
    margin: 10px 0;
    border: 1px solid #fff;
    background: rgba(100, 100, 100, 0.7);
    color: #fff;
    cursor: pointer;
    &:hover {
      background: rgba(100, 100, 100, 0.8);
    }
  }
`;

const Image = styled.div`
  position: relative;
  margin: 10px 20px 0 0;
  img {
    width: 500px;
    height: 290px;
    object-fit: fill;
    object-position: center center;
    @media screen and (max-width: 650px) {
      width: 300px;
      height: 290px;
    }
  }
  button,
  a {
    border: none;
    position: absolute;
    cursor: pointer;
    border-radius: 50%;
    &:hover {
      box-shadow: -10px 10px 20px 5px #000;
    }
  }
  button {
    top: -10px;
    right: -10px;
    background: #fff;
  }
  a {
    top: 5px;
    right: 5px;
    background: transparent;
    text-decoration: none;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  overflow-x: scroll;
  @media screen and (max-width: 650px) {
    width: 90%;
  }
`;
const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 0;
  border: 1px solid #fff;
  background: rgba(100, 100, 100, 0.7);
  color: #fff;
  cursor: pointer;
  &:hover {
    background: rgba(100, 100, 100, 0.8);
  }
  @media screen and (max-width: 650px) {
    padding: 5px 20px;
  }
`;

export { Container, Input, Image, ImagesContainer, Button };
