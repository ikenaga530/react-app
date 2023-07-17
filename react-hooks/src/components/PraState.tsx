import React, { useState } from "react";

const PraState = () => {
  const [count, setCount] = useState<number>(0);

  const handleClickPlus = () => {
    setCount(count + 1);
  };

  const handleClickMinus = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  };

  return (
    <div>
      <h1>UseState</h1>
      <button onClick={handleClickPlus}>+</button>
      <button onClick={handleClickMinus}>-</button>
      <p>{count}</p>
    </div>
  );
};

export default PraState;
