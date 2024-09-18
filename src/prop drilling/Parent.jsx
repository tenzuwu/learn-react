import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  //   let [name, setName] = useState("ram");
  console.log("i am parent");

  return (
    <div>
      Parent
      <Child />
    </div>
  );
};

export default Parent;
