import React from "react";

const Counter = () => {
  let count = 0;

  const plus = () => {
    count += 1;
    console.log("플러스 클릭:", count); // 값은 오르지만 화면은 안 바뀜
  };

  const minus = () => {
    count -= 1;
    console.log("마이너스 클릭:", count);
  };

  return (
    <div className="container" style={{ margin: "15px" }}>
      <h2 className="int">
        {count}
      </h2>

      <button className="plus" onClick={plus}>+</button>
      <button className="minus" onClick={minus}>-</button>
    </div>
  );
};

export default Counter;

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  
  console.log("현재 카운트:", count);

  const plus = () => setCount(count + 1);
  const minus = () => setCount(count - 1);

  return (
    <div className="container">
      <h2 className="int">
        {count}
      </h2>
      
      <button className="plus" onClick={plus}>+</button>
      <button className="minus" onClick={minus}>-</button>
    </div>
  );
};

export default Counter;