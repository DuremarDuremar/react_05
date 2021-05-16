import styled from "styled-components";
import fon01 from "./images/fon01.jpg";
import fon02 from "./images/fon02.jpg";
import fon03 from "./images/fon03.jpg";
import slider from "./images/slider.png";
import { Element } from "react-scroll";

export const Wrapper = styled.div`
  position: relative;
  background-color: #0d319c;
`;

export const Page = styled(Element)`
  margin: 0px auto;
  height: 1024px;
  width: 768px;
  min-height: 100vh;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow-x: hidden;
  ${(props) =>
    props.number === "3" &&
    `
    background-image: url(${fon03});
  `}
  ${(props) =>
    props.number === "2" &&
    `
    background-image: url(${fon02});
  `}
    ${(props) =>
    props.number === "1" &&
    `
    background-image: url(${fon01});
  `}
`;

export const Buttons = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateX(-50%);
  top: 50%;
  right: 2%;
  height: 60px;
  z-index: 2;
`;

export const Button = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#f78b1f" : "#fff")};
  cursor: pointer;
`;

export const Range = styled.div`
  position: absolute;
  z-index: 3;
  bottom: 10px;
  /* transform: translateX(-50%);
  left: 50%; */
  /* border: 2px solid black; */
  left: 10%;
  width: 668px;
  height: 175px;
  overflow: hidden;

  input[type="range"] {
    outline: 0;
    border: 0;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    /* border-radius: 500px; */
    width: 500px;
    max-width: 100%;
    transition: box-shadow 0.2s ease-in-out;
    cursor: pointer;

    & {
      margin-top: 30px;
      height: 20px;
      -webkit-appearance: none;
      background-color: #d1eaff;
    }
    &::-webkit-slider-runnable-track {
      height: 20px;
      -webkit-appearance: none;
      color: #444;
      transition: box-shadow 0.2s ease-in-out;
      /* clip-path: inset(-200px -20px -200px -200px); */
    }
    &::-webkit-slider-thumb {
      width: 20px;
      -webkit-appearance: none;
      height: 30px;
      cursor: pointer;
      background-image: url(${slider});
      background-repeat: no-repeat;
      background-size: 100%;
      transform: scale(3);
      box-shadow: 340px 0 0 320px rgb(21, 20, 86, 0.5),
        inset 0 0 0 40px transparent;
      transition: box-shadow 0.2s ease-in-out;
      position: relative;
    }
  }
  div {
    position: absolute;
    top: 30px;
    transform: translateX(-50%);
    left: 50%;
    width: 500px;
    height: 20px;
    background-color: gray;
    z-index: -1;
  }
  ul {
    position: absolute;
    bottom: 10px;
    transform: translateX(-50%);
    left: 48%;
    width: 500px;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    font-family: GothamPro;
    color: #fff;
    font-size: 20px;
  }
`;
