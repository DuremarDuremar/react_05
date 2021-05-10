import React from "react";
import beta from "../images/beta.png";
import "./page3.css";

const Page3 = () => {
  return (
    <section className="page3_content">
      <div className="page3_wrapper">
        <h1 className="page3_title">Звенья патогенеза СД2</h1>
        <div className="page3_name1">
          <strong>1&nbsp;β-клетки</strong>
          <div className="page3_beta">
            <img className="page3_beta-img" src={beta} alt="5" />
          </div>
          <div className="page3_arrow-1">
            <div className="page3_arrow-1_"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page3;
