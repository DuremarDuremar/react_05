import React, { useState } from "react";
import { scroller, Element } from "react-scroll";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import "./App.css";

const App = () => {
  const [page, setPage] = useState("1");
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  console.log(page);

  const touchMovie = (n) => {
    const scr =
      (+page === 2 && n === "bottom") || (+page === 3 && n === "bottom")
        ? "3"
        : (+page === 2 && n === "top") || (+page === 1 && n === "top")
        ? "1"
        : "2";
    console.log(scr, "scr");
    scroller.scrollTo(scr, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleTouchStart = (e) => {
    let id = e.target.id;
    if (page !== id) {
      setPage(id);
    }

    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      touchMovie("bottom");
    }

    if (touchStart - touchEnd < -100) {
      touchMovie("top");
    }
  };

  const Pages = () => {
    const pages = [<Page1 />, <Page2 />, <Page3 />];
    return pages.map((item, index) => {
      const classPage = `page${index + 1}`;

      return (
        <Element
          id={String(index + 1)}
          key={index}
          className={classPage + " page"}
          name={String(index + 1)}
          onTouchStart={(e) => handleTouchStart(e)}
          onTouchMove={(e) => handleTouchMove(e)}
          onTouchEnd={() => handleTouchEnd()}
        >
          {item}
        </Element>
      );
    });
  };
  return <div className="wrapper"> {Pages()}</div>;
};

export default App;
