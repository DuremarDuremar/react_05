import React from "react";
import ice1 from "../images/floes/ice1.png";
import ice2 from "../images/floes/ice2.png";
import ice3 from "../images/floes/ice3.png";
import ice4 from "../images/floes/ice4.png";
import "./page2.css";

const Page2 = () => {
  return (
    <section className="page2_content">
      <h1 className="page2_title">
        Основа терапии — <br /> патогенез СД2
      </h1>
      <div className="page_ice page2_ice1">
        <img className="page2_img" src={ice1} alt="1" />
      </div>
      <div className="page_ice page2_ice2">
        <img className="page2_img" src={ice2} alt="2" />
      </div>
      <div className="page_ice page2_ice3">
        <img className="page2_img" src={ice3} alt="3" />
      </div>
      <div className="page_ice page2_ice4">
        <img className="page2_img" src={ice4} alt="4" />
      </div>
    </section>
  );
};

export default Page2;
