import React from "react";
import { Circle, Wrapper } from "./style/style_circles.jsx";

export const circle1 = <Circle width="46px" height="46px" first></Circle>;
export const circle2 = (
  <Wrapper width="30px" height="30px" padding="4px">
    <Circle width="26px" height="26px" top="20%" left="20%" bcim></Circle>
  </Wrapper>
);
export const circle3 = (
  <Wrapper margin="0 20px 0 auto">
    <Circle top="12%" left="11%" w="10px" h="10px" bcim></Circle>
  </Wrapper>
);
export const circle4 = (
  <Wrapper>
    <Circle top="12%" left="11%" w="10px" h="10px" bcim></Circle>
  </Wrapper>
);
