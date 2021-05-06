import React, { useState } from "react";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import "./App.css";

const App = () => {
  const [page, setPage] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  console.log(page);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      console.log("botton");
      setTouchStart(0);
      setTouchEnd(0);
    }

    if (touchStart - touchEnd < -50) {
      console.log("top");
      setTouchStart(0);
      setTouchEnd(0);
    }
  };

  const ChangePage = (next) => {
    if (next) {
      setPage((prevPage) => (prevPage === 3 ? 1 : prevPage + 1));
    } else {
      setPage((prevPage) => (prevPage === 1 ? 3 : prevPage - 1));
    }
  };

  const Pages = (page) => {
    const pages = [<Page1 />, <Page2 />, <Page3 />];
    return pages.map((item, index) => {
      const classPage = `page${index + 1}`;
      return (
        <div
          key={index}
          id={index + 1}
          className={classPage + " page active_page"}
          onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
          onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
          onTouchEnd={() => handleTouchEnd()}
          onPointerEnter={(e) =>
            setPage((prevPage) =>
              prevPage !== e.target.id ? e.target.id : prevPage
            )
          }
          // onTouchMove={(e) => console.log(e.target.id)}
        >
          {item}
        </div>
      );
    });
  };

  return (
    <div className="wrapper">
      {Pages(page)}
      <button className="prev" onClick={() => ChangePage()}>
        prev
      </button>
      <button className="next" onClick={() => ChangePage("next")}>
        next
      </button>
    </div>
  );
};

export default App;
