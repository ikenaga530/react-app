import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { addCount } from "../state/addCount";

const PraUseeffect = () => {
  const [count, setCount] = useRecoilState(addCount);

  useEffect(() => {
    console.log("hello");
  }, [count]);

  return (
    <div>
      <h1>UseEffect</h1>
    </div>
  );
};

export default PraUseeffect;
