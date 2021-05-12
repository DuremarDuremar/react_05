import React from "react";
import { Content, Slide1, Slide2, Slide3, Title } from "./style/style3";
// import { Arrow } from "../components/arrow";
// import beta from "../images/beta.png";
import "./page3.css";

const Page3 = () => {
  return (
    <Content>
      <Slide1>
        <Title>1</Title>
      </Slide1>
      <Slide2>
        <Title>2</Title>
      </Slide2>
      <Slide3>
        <Title>3</Title>
      </Slide3>
    </Content>
  );
};

export default Page3;

{
  /* <div className="page3_wrapper">
        <h1 className="page3_title">Звенья патогенеза СД2</h1>
        <div className="page3_name1">
          <strong>1&nbsp;β-клетки</strong>
          <div className="page3_beta">
            <img src={beta} alt="5" />
            <Arrow t2 />
          </div>
        </div>
      </div> */
}
