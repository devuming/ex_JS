import React, { useState, useEffect } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`Update :: Count A : ${count}`);
  });
  return <div>{count}</div>;
});

const areEqual = (prevProps, nextProps) => {
  if (prevProps.obj.count === nextProps.obj.count) {
    // nextProps가 prevProps와 동일한 값 -> 리렌더 X
    return true;
  }
  return false; // 다른값->리렌더
};

const CounterB = React.memo(({ obj }) => {
  useEffect(() => {
    console.log(`Update :: Count B : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
}, areEqual); // 비교함수 전달

const OptimizeText = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });
  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A Button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <CounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>B Button</button>
      </div>
    </div>
  );
};

export default OptimizeText;
