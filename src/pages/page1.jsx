import React from "react";
import { circle1, circle2, circle3, circle4 } from "../components/circles";
import "./page1.css";
const Page1 = () => {
  return (
    <section>
      <h1 className="page1_title">
        Всегда ли цели терапии СД2 на поверхности?
      </h1>
      <div className="page1_wrapper">
        <h4 className="page1_text page1_text1">
          {circle1}&nbsp;<span>Цель по HbA1c</span>
        </h4>
        <h4 className="page1_text page1_text2">
          <span>Гипогликемия</span> {circle2}
        </h4>
        <h4 className="page1_text page1_text3">
          <span>Осложнения СД</span>
          {circle3}
        </h4>
        <h4 className="page1_text page1_text4">
          <span>СС риски</span> {circle4}
        </h4>
      </div>
    </section>
  );
};

export default Page1;
