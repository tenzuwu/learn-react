import React, { useEffect, useState } from "react";

const LearnUseEffect1 = () => {
  let [Count, setCount] = useState(0);
  let [Count1, setCount1] = useState(0);

  useEffect(() => {
    //CLEANUP FOUNCTION IS THE FUNCNTION WHICH IS RETURNED BY USEEFFECT.

    //CLEANUP FOUNCTION DOES NOT EXCUTE ON THE FIRST RENDER (COMPONENT MOUNT), BUT FROM THE
    //RENDER IF USEEFFECT EXECUTE, CLEANUP FUNCTION RUNS AT FIRST THEN THE PTHER CODE WILL RUN.

    //mount => show
    //unmount => hide
    console.log("i am useEffect");
    return () => {
      console.log("i am cleanup function");
    };
  }, [Count, Count1]);
  return (
    <div>
      <div>Count is {Count}</div>
      <div>Counti is {Count1}</div>
      <button
        onClick={() => {
          setCount(Count + 1);
        }}
      >
        increment{" "}
      </button>
      <button
        onClick={() => {
          setCount1((Count1 = 10));
        }}
      >
        add by 10
      </button>
    </div>
  );
};

export default LearnUseEffect1;
