import React from "react";
import {
  Content,
  Slide1,
  Slide2,
  Slide3,
  Title,
  WrapperImg,
} from "./style/style3";
import beta from "../images/beta.png";
import brain from "../images/brain.png";
import capa from "../images/capa.png";
import infection from "../images/infection.png";
import kidneys from "../images/kidneys.png";
import lipid from "../images/lipid.png";
import microflora from "../images/microflora.png";
import musle from "../images/musle.png";
import stomach from "../images/stomach.png";
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
        <Title>Звенья патогенеза СД2</Title>
        <WrapperImg width="35px" height="45px" top="180px" left="380px">
          <img src={beta} alt="beta" />
        </WrapperImg>
        <WrapperImg width="55px" height="55px" top="240px" left="580px">
          <img src={brain} alt="brain" />
        </WrapperImg>
        <WrapperImg>
          <img src={capa} alt="capa" />
        </WrapperImg>
        <WrapperImg>
          <img src={infection} alt="infection" />
        </WrapperImg>
        <WrapperImg>
          <img src={kidneys} alt="kidneys" />
        </WrapperImg>
        <WrapperImg>
          <img src={lipid} alt="lipid" />
        </WrapperImg>
        <WrapperImg>
          <img src={microflora} alt="microflora" />
        </WrapperImg>
        <WrapperImg>
          <img src={musle} alt="musle" />
        </WrapperImg>
        <WrapperImg>
          <img src={stomach} alt="stomach" />
        </WrapperImg>
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
