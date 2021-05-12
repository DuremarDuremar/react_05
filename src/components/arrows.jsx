import { Arrows, Arrow, ArrowWrapper } from "./style/style_arrows";

const ArrowPage = ({ double, top, left, width, rotate }) => {
  const arrow = double ? (
    <Arrows top={top} left={left} rotate={rotate}>
      <ArrowWrapper double>
        <Arrow width={width} />
      </ArrowWrapper>

      <ArrowWrapper double>
        <Arrow width={width} />
      </ArrowWrapper>
    </Arrows>
  ) : (
    <ArrowWrapper absolute rotate={rotate} top={top} left={left}>
      <Arrow width={width} />
    </ArrowWrapper>
  );

  return arrow;
};

export default ArrowPage;
