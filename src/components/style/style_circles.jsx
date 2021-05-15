import styled, { keyframes, css } from "styled-components";

const pulse = (n) => keyframes`
    0% {
      transform: scale(0);
      opacity: 0;
      background-color: #f78b1f;
    }
    50% {
      opacity: 0.7;
      background-color: rgba(247, 139, 31, 0.3);
      background-image: linear-gradient(
        165deg,
        rgba(222, 121, 27, 0.15) 10%,
        rgba(207, 20, 55, 0.15) 90%
      );
    }
    100% {
      transform: scale(${n});
      opacity: 0;
      background-color: rgba(247, 139, 31, 0.3);
    }`;

export const Circle = styled.div`
  width: ${(props) => props.width || "18px"};
  height: ${(props) => props.height || "18px"};
  border: 2px solid #d56900;
  border-radius: 50%;
  position: relative;
  ${(props) =>
    props.first &&
    `
    background-color: rgba(247, 139, 31, 0.5);
  `}

  &:before,
  :after {
    content: "";
    position: absolute;
    top: ${(props) => props.top || "32%"};
    left: ${(props) => props.left || "32%"};
    border-radius: 50%;
    border: 2px solid #d56900;
    width: ${(props) => props.w || "13px"};
    height: ${(props) => props.h || "13px"};
    animation: ${({ first }) =>
      first
        ? css`
            ${pulse(3.5)} 1s linear infinite;
          `
        : css`
            ${pulse(2)} 1s linear infinite;
          `};
    ${(props) =>
      props.bcim &&
      `
    background-image: radial-gradient(circle at 0 0, #de791b, #cf1437);
  `}
  }
`;

export const Wrapper = styled.div`
  width: ${(props) => props.width || "22px"};
  height: ${(props) => props.height || "22px"};
  padding: ${(props) => props.padding || "3px"};
  margin: ${(props) => props.margin || "0px auto"};
  border: 2px solid #d56900;
  border-radius: 50%;
  opacity: 0.7;
  background-color: rgba(247, 139, 31, 0.5);
`;
