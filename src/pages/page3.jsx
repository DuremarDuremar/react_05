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
  LitlleTitle,
} from "./style/style3";
import ArrowPage from "../components/arrows";
import beta from "../images/beta.png";
import brain from "../images/brain.png";
import capa from "../images/capa.png";
import infection from "../images/infection.png";
import kidneys from "../images/kidneys.png";
import lipid from "../images/lipid.png";
import microflora from "../images/microflora.png";
import musle from "../images/musle.png";
import stomach from "../images/stomach.png";

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

        <WrapperImg top="260px" left="50px">
          <TextImg right>
            <b>8</b>
            <br />
            Жировые клетки
          </TextImg>
          <FonImg>
            <img src={microflora} alt="microflora" />
          </FonImg>
        </WrapperImg>
        <WrapperImg top="380px" left="5px">
          <TextImg right>
            <b>9</b>
            <br />
            Нарушение иммунной <br />
            регуляции/воспаление
          </TextImg>
          <FonImg widthImg="90%" heightImg="80%">
            <img src={infection} alt="infection" />
          </FonImg>
        </WrapperImg>
        <WrapperImg top="580px" left="110px">
          <TextImg right>
            <b>10</b>
            <br />
            Желудок
          </TextImg>
          <FonImg widthImg="75%" heightImg="75%">
            <img src={stomach} alt="stomach" />
          </FonImg>
        </WrapperImg>

        <WrapperImg top="760px" left="310px">
          <TextImg right>
            <b>11</b>
            <br />
            Почки
          </TextImg>
          <FonImg>
            <img src={kidneys} alt="kidneys" />
          </FonImg>
        </WrapperImg>

        <WrapperImg top="440px" left="250px">
          <TextImg right>
            <b>2</b>
            <br />↓ инкретинового <br />
            эффекта
          </TextImg>
        </WrapperImg>

        <WrapperImg top="440px" left="415px">
          <TextImg>
            <b>3</b>
            <br />
            Дефект <br />
            α-клеток
          </TextImg>
        </WrapperImg>

        <LitlleTitle top="515px" left="160px">
          ↓ амилин
        </LitlleTitle>
        <LitlleTitle top="575px" left="420px">
          ↑ глюкагон
        </LitlleTitle>
        <LitlleTitle top="660px" left="320px" fs="24px">
          Гипергликемия
        </LitlleTitle>

        <ArrowPage double top="280px" left="455px" rotate="rotate(15deg)" />
        <ArrowPage
          double
          top="325px"
          left="430px"
          rotate="rotate(35deg)"
          width="110px"
        />
        <ArrowPage
          double
          top="270px"
          left="260px"
          rotate="rotate(-15deg)"
          width="90px"
        />
        <ArrowPage
          double
          top="335px"
          left="240px"
          rotate="rotate(-35deg)"
          width="130px"
        />
        <ArrowPage
          top="410px"
          left="170px"
          rotate="rotate(130deg)"
          width="240px"
        />
        <ArrowPage
          top="485px"
          left="245px"
          rotate="rotate(90deg)"
          width="320px"
        />
        <ArrowPage
          top="375px"
          left="330px"
          rotate="rotate(90deg)"
          width="100px"
        />
        <ArrowPage
          top="375px"
          left="380px"
          rotate="rotate(90deg)"
          width="100px"
        />
        <ArrowPage
          top="545px"
          left="420px"
          rotate="rotate(90deg)"
          width="30px"
        />
        <ArrowPage
          top="628px"
          left="415px"
          rotate="rotate(90deg)"
          width="35px"
        />
        <ArrowPage
          top="592px"
          left="325px"
          rotate="rotate(90deg)"
          width="105px"
        />
        <ArrowPage
          top="555px"
          left="190px"
          rotate="rotate(90deg)"
          width="18px"
        />
        <ArrowPage
          top="590px"
          left="205px"
          rotate="rotate(40deg)"
          width="140px"
        />
        <ArrowPage
          top="640px"
          left="245px"
          rotate="rotate(40deg)"
          width="70px"
        />
        <ArrowPage
          double
          top="333px"
          left="605px"
          rotate="rotate(90deg)"
          width="20px"
        />
        <ArrowPage
          double
          top="720px"
          left="385px"
          rotate="rotate(90deg)"
          width="20px"
        />
      </Slide3>
    </Content>
  );
};

export default Page3;
