import React from "react";
import { Content, Title, Wrapper, Text, PageFooter } from "./style/style1";
import { circle1, circle2, circle3, circle4 } from "../components/circles";
import { animateScroll } from "react-scroll";
import bottom from "../images/bottom.png";
import array from "../images/array.png";

const Page1 = ({ setPage }) => {
  const ToBottom = () => {
    setPage("3");
    animateScroll.scrollTo(2000);
  };

  return (
    <Content>
      <Title>Всегда ли цели терапии СД2 на поверхности?</Title>
      <Wrapper>
        <Text top="120px" left="330px" first>
          {circle1}&nbsp;<span>Цель по HbA1c</span>
        </Text>
        <Text top="310px" left="80px">
          <span>Гипогликемия</span> {circle2}
        </Text>
        <Text top="450px" left="195px">
          <span>Осложнения СД</span>
          {circle3}
        </Text>
        <Text top="430px" left="505px">
          <span>СС риски</span> {circle4}
        </Text>
      </Wrapper>
      <PageFooter onClick={() => ToBottom()}>
        <h3>Листайте вниз</h3>
        <img src={array} alt="array" className="array" />
        <img src={bottom} alt="bottom" className="orange" />
      </PageFooter>
    </Content>
  );
};

export default Page1;
