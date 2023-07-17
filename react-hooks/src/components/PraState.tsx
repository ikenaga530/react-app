import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { addCount } from "../state/addCount";

const PraState = () => {
  const [count, setCount] = useRecoilState<number>(addCount);
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
