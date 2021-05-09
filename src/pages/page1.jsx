import React from "react";
import { circle1, circle2, circle3, circle4 } from "../components/circles";

const Page1 = () => {
  return (
    <section>
      <h1 className="page1_title">
        Всегда ли цели терапии СД2 на поверхности?
      </h1>
      <h4 className="page1_text page1_text1">
        {circle1} <span>Цель по HbA1c</span>
      </h4>
      <h4 className="page1_text page1_text2">
        {circle2}
        <span>Гипогликемия</span>
      </h4>
      <h4 className="page1_text page1_text3">
        {circle3}
        <span>Осложнения СД</span>
      </h4>
      <h4 className="page1_text page1_text4">
        {circle4}
        <span>СС риски</span>
      </h4>
    </section>
  );
};

export default Page1;
