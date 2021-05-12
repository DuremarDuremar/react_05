import styled from "styled-components";

export const Arrows = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 10px;
  /* width: ${(props) => props.width || "80px"}; */
  position: absolute;
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  transform: ${(props) => props.rotate || "rotate(0)"};
`;
export const Arrow = styled.div`
  position: relative;
  width: ${(props) => props.width || "80px"};
  height: 1px;
  background-color: #fff;
  display: block;
  :after {
    content: "";
    position: absolute;
    width: 9px;
    height: 1px;
    top: -1px;
    right: -6px;
    background-color: #fff;
    transform: rotate(15deg);
  }
  :before {
    content: "";
    position: absolute;
    width: 9px;
    height: 1px;
    top: 1px;
    right: -6px;
    background-color: #fff;
    transform: rotate(-15deg);
  }
`;
export const ArrowWrapper = styled.div`
  position: ${(props) => props.absolute && "absolute"};
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  transform: ${(props) => props.rotate || "rotate(0)"};
  ${(props) =>
    props.double &&
    `
   :last-child {
    transform: rotate(180deg);
  }
  `}
`;
