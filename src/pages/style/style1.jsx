import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Title = styled.h1`
  font-family: "Gotham Regular", "Arial", sans-serif;
  font-size: 35px;
  font-weight: normal;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: #0d319c;
  padding: 70px 0 0 40px;
  max-width: 520px;
  object-fit: contain;
  margin: 0;
`;

export const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
`;
