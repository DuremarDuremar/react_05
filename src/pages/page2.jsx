import React from "react";
import { Content, Title, Ice } from "./style/style2";
import ice1 from "../images/floes/ice1.png";
import ice2 from "../images/floes/ice2.png";
import ice3 from "../images/floes/ice3.png";
import ice4 from "../images/floes/ice4.png";

const Page2 = () => {
  return (
    <Content>
      <Title>
        Основа терапии — <br /> патогенез СД2
      </Title>
      <Ice width="35px" height="35px" left="70px" top="200px">
        <img src={ice1} alt="1" />
      </Ice>
      <Ice width="150px" height="150px" left="618px" top="230px">
        <img src={ice2} alt="2" />
      </Ice>
      <Ice width="85px" height="85px" left="150px" top="500px">
        <img src={ice3} alt="3" />
      </Ice>
      <Ice width="50px" height="50px" left="580px" top="750px">
        <img src={ice4} alt="4" />
      </Ice>
    </Content>
  );
};

export default Page2;
