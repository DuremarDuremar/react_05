import styled, { keyframes, css } from "styled-components";
import { useState, useEffect } from "react";

const SliderRotate = (arg) => {
  const [Slider, setSlider] = useState("-1536px");
  const [, setPrevSlider] = useState("-1536px");

  useEffect(() => {
    setPrevSlider((prev) => {
      setSlider(prev);
      return prev !== arg ? arg : prev;
    });
  }, [arg]);
  return Slider;
};

const slide = (prev, n) => keyframes`
    from {transform:translate(${prev})}
    to {transform:translate(${n})}
    
`;

export const Content = styled.section`
  height: 100%;
  display: flex;
  animation: ${({ range }) =>
    css`
      ${slide(SliderRotate(range), range)} 1s ease-in-out;
      animation-fill-mode: forwards;
    `};
`;

export const Slide = styled.section`
  min-width: 768px;
  width: 100%;
  position: relative;
`;

export const Title = styled.h1`
  font-family: "Gotham Regular", "Arial", sans-serif;
  margin: 0;
  padding: 100px 0 0 50px;
  font-size: 28px;
  font-weight: normal;
  line-height: 1.2;
  letter-spacing: -0.6px;
  color: #fff;
  object-fit: contain;
`;

export const BlockImg = styled.div`
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
  position: absolute;
  top: 360px;
  left: 510px;
  width: 235px;
  height: 260px;
  background: rgb(64, 65, 98);
  background: linear-gradient(
    to bottom,
    rgba(64, 65, 98, 1) 36%,
    rgba(26, 25, 115, 1) 100%
  );
  border-top: solid 2px #030d22;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
  h2 {
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.3px;
    text-align: center;
    color: #fff;
    margin-top: 15px;
  }
`;

export const WrapperImg = styled.div`
  position: ${(props) => props.position || "absolute"};
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  display: ${(props) => props.display || "flex"};
  z-index: 1;
  ${(props) =>
    props.slide2 &&
    `
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const TextImg = styled.h3`
  font-family: Lato;
  font-weight: 500;
  font-size: ${(props) => props.fs || "20px"};
  margin: ${(props) =>
    props.fs ? "0 0 8px 0" : props.right ? "0 8px 0 0" : "0 0 0 8px"};
  letter-spacing: -0.51px;
  text-align: ${(props) => props.right && "right"};
  text-align: ${(props) => props.center && "center"};
  color: #fff;
  padding-top: ${(props) => props.pt && "10px"};
  b {
    font-size: 34px;
  }
`;

export const FonImg = styled.div`
  background-color: #404162;
  border-radius: 100%;
  width: ${(props) => props.width || "60px"};
  height: ${(props) => props.height || "60px"};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    padding: ${(props) => props.padding || "0"};
    max-width: ${(props) => props.widthImg || "100%"};
    max-height: ${(props) => props.heightImg || "100%"};
  }

  b {
    font-family: Lato;
    font-size: 40px;
    font-weight: 600;
    color: #fff;
  }
`;

export const LitlleTitle = styled.h4`
  position: ${(props) => (props.static ? "static" : "absolute")};
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  font-size: ${(props) => props.fs || "15px"};
  color: #fff;
  margin: 0;
  font-weight: 500;
  letter-spacing: -0.31px;
`;

export const BlockTitle = styled.div`
  position: absolute;
  width: ${(props) => props.width || "340px"};
  height: ${(props) => props.height || "160px"};
  top: ${(props) => props.top || "410px"};
  left: ${(props) => props.left || "205px"};
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Ice = styled.div`
  position: absolute;
  width: ${(props) => props.width || "60px"};
  height: ${(props) => props.height || "60px"};
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  transform: ${(props) => props.rotate || "rotate(0)"};
  opacity: 0.6;
  img {
    width: 100%;
    height: 100%;
  }
`;
