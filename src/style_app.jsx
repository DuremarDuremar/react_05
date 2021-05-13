import styled from "styled-components";
import fon01 from "./images/fon01.jpg";
import fon02 from "./images/fon02.jpg";
import fon03 from "./images/fon03.jpg";
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
`;

export const Button = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#f78b1f" : "#fff")};
  cursor: pointer;
`;
