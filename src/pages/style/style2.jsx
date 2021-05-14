import styled from "styled-components";

export const Content = styled.section`
  text-align: center;
  position: relative;
  height: 100%;
`;

export const Title = styled.h1`
  font-family: "Gotham Regular", "Arial", sans-serif;
  font-size: 35px;
  font-weight: normal;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: #fff;
  object-fit: contain;
  margin: 0;
  padding-top: 170px;
`;

export const Ice = styled.div`
  position: absolute;
  width: ${(props) => props.width || "60px"};
  height: ${(props) => props.height || "60px"};
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  img {
    width: 100%;
    height: 100%;
  }
`;
