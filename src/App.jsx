import React, { useState } from "react";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import "./App.css";

const App = () => {
  const [page, setPage] = useState(1);
  console.log(page);
  const ChangePage = (next) => {
    if (next) {
      setPage((prevPage) => (prevPage === 3 ? 1 : prevPage + 1));
    } else {
      setPage((prevPage) => (prevPage === 1 ? 3 : prevPage - 1));
    }
  };

  // const Number = (page) => {
  //   return <"Page" + {page}/>;
  // };

  return (
    <div className="Wrapper">
      {/* {Number(page)} */}
      <button onClick={() => ChangePage()}>prev</button>
      <button onClick={() => ChangePage("next")}>next</button>
    </div>
  );
};

export default App;
