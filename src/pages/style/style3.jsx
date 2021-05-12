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
  top: 350px;
  left: 500px;
  width: 240px;
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
`;

export const TextImg = styled.h3`
  font-family: Lato;
  font-weight: 500;
  font-size: ${(props) => props.fs || "20px"};
  margin: ${(props) => (props.fs ? "0 0 8px 0" : "0 0 0 8px")};
  letter-spacing: -0.51px;
  text-align: left;
  color: #fff;
  b {
    font-size: 30px;
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
`;
