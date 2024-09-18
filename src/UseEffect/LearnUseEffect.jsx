import React, { useEffect } from "react";

const LearnUseEffect = () => {
  //useEffect function is a asynchornus finction which will execute once
  // all the code gets executed. It means it will be executed once the dom is printed
  // on the browser.
  useEffect(() => {
    console.log("i am useEffect");
  });
  console.log("a");
  return <div>LearnUseEffect</div>;
};

export default LearnUseEffect;
