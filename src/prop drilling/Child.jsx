import React from "react";
import GrandChild from "./GrandChild";

const Child = (props) => {
  return (
    <div>
      Child
      <GrandChild />
    </div>
  );
};

export default Child;
