import React from "react";
import { Circle, Wrapper } from "./style/style_circles.jsx";
// import "./circles.css";

export const circle1 = <Circle width="46px" height="46px" first></Circle>;
export const circle2 = (
  <Wrapper>
    <Circle width="26px" height="26px" top="20%" left="20%" bcim></Circle>
  </Wrapper>
);
export const circle3 = (
  <Wrapper>
    <Circle noafter></Circle>
  </Wrapper>
);
export const circle4 = (
  <Wrapper>
    <Circle top="12%" left="12%" w="10px" h="10px" bcim></Circle>
  </Wrapper>
);
