import styled from "styled-components";

export const Content = styled.section`
  height: 100%;
  display: flex;
  transform: translate(-1536px);
`;

export const Slide1 = styled.section`
  background-color: azure;
  min-width: 768px;
  width: 100%;
`;
export const Slide2 = styled.section`
  background-color: blueviolet;
  min-width: 768px;
  width: 100%;
`;
export const Slide3 = styled.section`
  background-color: saddlebrown;
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

export const WrapperImg = styled.div`
  position: absolute;
  width: ${(props) => props.width || "0"};
  height: ${(props) => props.height || "0"};
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  img {
    width: 100%;
  }
`;
