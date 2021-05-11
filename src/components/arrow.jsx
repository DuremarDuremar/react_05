import "./arrow.css";

export const Arrow = (props) => {
  const counter = props.t2 ? (
    <div className="page3_arrows_two">
      <div className="page3_arrow_wrapper">
        <div className="page3_arrow"></div>
      </div>

      <div className="page3_arrow_wrapper">
        <div className="page3_arrow"></div>
      </div>
    </div>
  ) : (
    <div className="page3_arrow_wrapper">
      <div className="page3_arrow"></div>
    </div>
  );

  return counter;
};
