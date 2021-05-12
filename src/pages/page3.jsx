import React from "react";
import {
  Content,
  Slide1,
  Slide2,
  Slide3,
  Title,
  TextImg,
  FonImg,
  WrapperImg,
  BlockImg,
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
        <WrapperImg top="180px" left="360px" display="block">
          <TextImg fs="26px">
            <b>1</b> β-клетки
          </TextImg>
          <FonImg
            padding="13px 11px 6px"
            width="85px"
            height="85px"
            widthImg="80%"
            heightImg="80%"
          >
            <img src={beta} alt="beta" />
          </FonImg>
        </WrapperImg>
        <WrapperImg top="260px" left="540px">
          <FonImg widthImg="70%" heightImg="70%">
            <img src={brain} alt="brain" />
          </FonImg>
          <TextImg>
            <b>7</b>
            <br />
            Головной мозг
          </TextImg>
        </WrapperImg>

        <BlockImg>
          <h2>Инсулинорезистентность</h2>
          <WrapperImg position="relative">
            <FonImg padding="15px 11px 1px" widthImg="80%" heightImg="80%">
              <img src={capa} alt="capa" />
            </FonImg>
            <TextImg>
              <b>6</b>
              <br />
              Печень
            </TextImg>
          </WrapperImg>
          <WrapperImg position="relative">
            <FonImg widthImg="90%" heightImg="90%">
              <img src={musle} alt="musle" />
            </FonImg>
            <TextImg>
              <b>5</b>
              <br />
              Мыщцы
            </TextImg>
          </WrapperImg>
          <WrapperImg position="relative">
            <FonImg widthImg="80%" heightImg="80%">
              <img src={lipid} alt="lipid" />
            </FonImg>
            <TextImg>
              <b>4</b>
              <br />
              Жировые клетки
            </TextImg>
          </WrapperImg>
        </BlockImg>

        <WrapperImg>
          <img src={infection} alt="infection" />
        </WrapperImg>
        <WrapperImg>
          <img src={kidneys} alt="kidneys" />
        </WrapperImg>
        <WrapperImg>
          <img src={microflora} alt="microflora" />
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
