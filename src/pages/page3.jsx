import React from "react";
import { Arrow } from "../components/arrow";
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
            <img src={beta} alt="5" />
            <Arrow t2 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page3;
