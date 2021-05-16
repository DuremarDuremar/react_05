import React from "react";
import {
  Content,
  Slide,
  Title,
  TextImg,
  FonImg,
  WrapperImg,
  BlockImg,
  LitlleTitle,
  BlockTitle,
  Ice,
} from "./style/style3";
import ice1 from "../images/floes/ice1.png";
import ice3 from "../images/floes/ice3.png";
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

const Page3 = ({ range }) => {
  const rotate = range === "1" ? "0" : range === "2" ? "-768px" : "-1536px";

  return (
    <Content range={rotate}>
      <Slide>
        <Title>Звенья патогенеза СД2</Title>
        <BlockTitle width="280px" height="100px" left="250px" top="600px">
          <LitlleTitle fs="22px" static>
            Гипергликемия
          </LitlleTitle>
        </BlockTitle>

        <WrapperImg top="180px" left="360px" slide2>
          <TextImg fs="26px" center>
            <b>1</b> <br />
            β-клетки
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
        <WrapperImg top="540px" left="50px" slide2>
          <TextImg fs="26px" center>
            <b>2</b> <br />
            Мышцы
          </TextImg>
          <FonImg width="85px" height="85px" widthImg="90%" heightImg="90%">
            <img src={musle} alt="musle" />
          </FonImg>
        </WrapperImg>
        <WrapperImg top="540px" left="650px" slide2>
          <TextImg fs="26px" center>
            <b>3</b> <br />
            Печень
          </TextImg>
          <FonImg
            padding="13px 0 0 10px"
            width="85px"
            height="85px"
            widthImg="70%"
            heightImg="70%"
          >
            <img src={capa} alt="capa" />
          </FonImg>
        </WrapperImg>

        <ArrowPage
          top="450px"
          left="310px"
          rotate="rotate(90deg)"
          width="185px"
        />
        <ArrowPage
          top="470px"
          left="130px"
          rotate="rotate(130deg)"
          width="280px"
        />
        <ArrowPage
          top="470px"
          left="400px"
          rotate="rotate(50deg)"
          width="280px"
        />
        <ArrowPage top="650px" left="150px" rotate="rotate(0)" width="85px" />
        <ArrowPage
          top="650px"
          left="550px"
          rotate="rotate(180deg)"
          width="85px"
        />
        <Ice
          width="35px"
          height="35px"
          left="640px"
          top="110px"
          rotate="rotate(0)"
        >
          <img src={ice1} alt="1" />
        </Ice>
        <Ice
          width="100px"
          height="100px"
          left="520px"
          top="220px"
          rotate="rotate(30deg)"
        >
          <img src={ice3} alt="3" />
        </Ice>
        <Ice
          width="175px"
          height="175px"
          left="-50px"
          top="760px"
          rotate="rotate(-40deg)"
        >
          <img src={ice3} alt="2" />
        </Ice>
      </Slide>

      <Slide>
        <Title>Смертельный октет</Title>
        <BlockTitle>
          <LitlleTitle fs="24px" static>
            Гипергликемия
          </LitlleTitle>
        </BlockTitle>

        <WrapperImg top="180px" left="340px" slide2>
          <TextImg fs="26px" center>
            <b>1</b> <br />
            β-клетки
          </TextImg>
          <FonImg
            padding="15px 11px 0"
            width="65px"
            height="65px"
            widthImg="85%"
            heightImg="85%"
          >
            <img src={beta} alt="beta" />
          </FonImg>
        </WrapperImg>
        <WrapperImg top="255px" left="40px">
          <TextImg right>
            Инкретинового <br />
            эффекта
          </TextImg>
          <FonImg
            padding="15px 11px 0"
            width="65px"
            height="65px"
            widthImg="85%"
            heightImg="85%"
          >
            <b>2</b>
          </FonImg>
        </WrapperImg>
        <WrapperImg top="255px" left="515px">
          <FonImg
            padding="15px 11px 0"
            width="65px"
            height="65px"
            widthImg="85%"
            heightImg="85%"
          >
            <b>3</b>
          </FonImg>
          <TextImg>
            Дефект <br />
            α-клеток
          </TextImg>
        </WrapperImg>
        <WrapperImg top="450px" left="600px">
          <FonImg widthImg="80%" heightImg="80%">
            <img src={lipid} alt="lipid" />
          </FonImg>
          <TextImg pt>
            <b>4</b>
            <br />
            Жировые
            <br /> клетки
          </TextImg>
        </WrapperImg>
        <WrapperImg top="450px" left="30px">
          <TextImg right pt>
            <b>8</b>
            <br />
            Почки
          </TextImg>
          <FonImg>
            <img src={kidneys} alt="kidneys" />
          </FonImg>
        </WrapperImg>

        <WrapperImg top="640px" left="165px" slide2>
          <FonImg widthImg="75%" heightImg="75%">
            <img src={brain} alt="brain" />
          </FonImg>
          <TextImg center pt>
            <b>7</b>
            <br />
            Головной <br />
            мозг
          </TextImg>
        </WrapperImg>
        <WrapperImg top="640px" left="345px" slide2>
          <FonImg widthImg="85%" heightImg="85%" padding="10px 0 0">
            <img src={capa} alt="capa" />
          </FonImg>
          <TextImg center pt>
            <b>6</b>
            <br />
            Печень
          </TextImg>
        </WrapperImg>
        <WrapperImg top="640px" left="510px" slide2>
          <FonImg widthImg="90%" heightImg="90%">
            <img src={musle} alt="musle" />
          </FonImg>
          <TextImg center pt>
            <b>5</b>
            <br />
            Мышцы
          </TextImg>
        </WrapperImg>

        <ArrowPage
          top="362px"
          left="360px"
          rotate="rotate(90deg)"
          width="55px"
        />
        <ArrowPage
          top="362px"
          left="520px"
          rotate="rotate(90deg)"
          width="55px"
        />
        <ArrowPage
          top="362px"
          left="180px"
          rotate="rotate(90deg)"
          width="55px"
        />

        <ArrowPage top="480px" left="160px" rotate="rotate(0)" width="30px" />
        <ArrowPage
          top="480px"
          left="560px"
          rotate="rotate(180deg)"
          width="30px"
        />

        <ArrowPage
          top="612px"
          left="185px"
          rotate="rotate(-90deg)"
          width="43px"
        />
        <ArrowPage
          top="612px"
          left="350px"
          rotate="rotate(-90deg)"
          width="43px"
        />
        <ArrowPage
          top="612px"
          left="525px"
          rotate="rotate(-90deg)"
          width="43px"
        />

        <Ice
          width="35px"
          height="35px"
          left="400px"
          top="80px"
          rotate="rotate(0)"
        >
          <img src={ice1} alt="1" />
        </Ice>
        <Ice
          width="100px"
          height="100px"
          left="10px"
          top="280px"
          rotate="rotate(30deg)"
        >
          <img src={ice3} alt="3" />
        </Ice>
        <Ice
          width="125px"
          height="125px"
          left="555px"
          top="870px"
          rotate="rotate(-45deg)"
        >
          <img src={ice3} alt="2" />
        </Ice>
      </Slide>

      <Slide>
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
          <FonImg widthImg="75%" heightImg="75%">
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

        <Ice
          width="35px"
          height="35px"
          left="10px"
          top="110px"
          rotate="rotate(0)"
        >
          <img src={ice1} alt="1" />
        </Ice>
        <Ice
          width="100px"
          height="100px"
          left="670px"
          top="230px"
          rotate="rotate(30deg)"
        >
          <img src={ice3} alt="3" />
        </Ice>
        <Ice
          width="125px"
          height="125px"
          left="70px"
          top="870px"
          rotate="rotate(-70deg)"
        >
          <img src={ice3} alt="3" />
        </Ice>
      </Slide>
    </Content>
  );
};

export default Page3;
