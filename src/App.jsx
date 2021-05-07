import React, { useState, useEffect } from "react";
import {
  animateScroll as scroll,
  scroller,
  Events,
  Element,
} from "react-scroll";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import "./App.css";

const App = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    Events.scrollEvent.register("begin", console.log("begin"));

    Events.scrollEvent.register("end", function () {
      console.log("end");
    });
    scroller.scrollTo("page2", {
      duration: 1500,
      delay: 100,
      smooth: true,
      // containerId: 'ContainerElementID',
    });
    // return () => {
    //     cleanup
    // }
  }, []);

  const Pages = () => {
    const pages = [<Page1 />, <Page2 />, <Page3 />];
    return pages.map((item, index) => {
      const classPage = `page${index + 1}`;

      return (
        <Element key={index} className={classPage + " page"} name={classPage}>
          {item}
        </Element>
      );
    });
  };
  return <div className="wrapper"> {Pages()}</div>;
};

export default App;
