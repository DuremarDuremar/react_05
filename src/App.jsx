import React, { useState } from "react";
import { scroller, Element } from "react-scroll";
import Page1 from "./pages/page1.jsx";
import Page2 from "./pages/page2.jsx";
import Page3 from "./pages/page3.jsx";
import "./App.css";

const App = () => {
  const [page, setPage] = useState("1");
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  console.log(page);

  const touchMove = (n) => {
    const scr =
      (+page === 2 && n === "bottom") || (+page === 3 && n === "bottom")
        ? "3"
        : (+page === 2 && n === "top") || (+page === 1 && n === "top")
        ? "1"
        : "2";

    console.log(n);
    console.log("scr", scr);

    if (page !== scr) {
      setPage(scr);
      scroller.scrollTo(scr, {
        duration: 1500,
        delay: 100,
        smooth: true,
      });
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleTouchStart = (e, id) => {
    let ids = String(id);
    if (page !== ids) {
      setPage(ids);
    }

    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      touchMove("bottom");
    }

    if (touchStart - touchEnd < -50) {
      touchMove("top");
    }
  };

  const btnMove = (n) => {
    scroller.scrollTo(String(n), {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
    setPage(String(n));
  };

  const Pages = () => {
    const pages = [<Page1 />, <Page2 />, <Page3 />];
    return pages.map((item, index) => {
      const classPage = `page${index + 1}`;

      return (
        <Element
          // id={String(index + 1)}
          key={index}
          className={classPage + " page"}
          name={String(index + 1)}
          onTouchStart={(e) => handleTouchStart(e, index + 1)}
          onTouchMove={(e) => handleTouchMove(e)}
          onTouchEnd={() => handleTouchEnd()}
        >
          {item}
        </Element>
      );
    });
  };
  return (
    <div className="wrapper">
      {Pages()}
      <div className="buttons">
        {[...new Array(3).keys()].map((item) => {
          const classBtn =
            Number(page) === item + 1
              ? `btn-${item + 1} btn-active`
              : `btn-${item + 1}`;
          return (
            <button
              key={item}
              className={classBtn}
              onClick={() => btnMove(item + 1)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
