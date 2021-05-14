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

export const Text = styled.h4`
  text-align: center;
  position: absolute;
  object-fit: contain;
  font-family: Lato;
  letter-spacing: 0.39px;
  text-align: left;
  color: #0d319c;
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  ${(props) =>
    props.first &&
    `
    display: flex;
    align-items: center;
  `}
`;

export const PageFooter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ease-out 0.35s;
  &:hover {
    opacity: 0.5;
  }
  h3 {
    font-family: GothamPro;
    letter-spacing: -0.3px;
    color: #fff;
  }

  .array {
    width: 50px;
    height: 30px;
    margin-bottom: 35px;
  }
  .orange {
    width: 600px;
    height: 150px;
    position: absolute;
    bottom: 0;
    cursor: pointer;
  }
`;
