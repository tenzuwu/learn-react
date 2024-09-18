import React, { useState } from "react";

const UseState1 = () => {
  let [count, setCount] = useState(0);

  //COMPONENT WILL RENDER IF STATE VARIABLE IS CHANGED.
  console.log("i am state");

  return (
    <div>
      <div>the count is {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default UseState1;
