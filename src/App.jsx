import React, { useState, useRef } from "react";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import "./App.css";

const App = () => {
  const [page, setPage] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  console.log(page);
  console.log("touchStart", touchStart);
  console.log("touchEnd", touchEnd);

  const scrollElement = () => {
    myRef2.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      if (touchStart !== 0 && touchEnd !== 0) {
        scrollElement();
        console.log("botton");
      }
    }

    if (touchStart - touchEnd < -50) {
      if (touchStart !== 0 && touchEnd !== 0) {
        scrollElement();
        console.log("top");
      }
    }
  };

  const ChangePage = (next) => {
    if (next) {
      setPage((prevPage) => (prevPage === 3 ? 1 : prevPage + 1));
    } else {
      setPage((prevPage) => (prevPage === 1 ? 3 : prevPage - 1));
    }
  };

  const Pages = () => {
    const pages = [<Page1 />, <Page2 />, <Page3 />];
    return pages.map((item, index) => {
      const classPage = `page${index + 1}`;
      const classNone =
        (page == 1 && index == 2) || (page == 3 && index == 0)
          ? "noactive_page"
          : "active_page";
      return (
        <div
          key={index}
          id={index + 1}
          ref={index === 0 ? myRef1 : index === 1 ? myRef2 : myRef3}
          className={classPage + " page " + classNone}
          onTouchStart={(e) => handleTouchStart(e)}
          onTouchMove={(e) => handleTouchMove(e)}
          onTouchEnd={() => handleTouchEnd()}
          onPointerEnter={(e) =>
            setPage((prevPage) =>
              prevPage !== e.target.id ? e.target.id : prevPage
            )
          }
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
