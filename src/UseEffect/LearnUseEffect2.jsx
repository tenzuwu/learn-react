import React, { useEffect, useState } from "react";

const LearnUseEffect2 = () => {
  let [count, setCount] = useState(0);
  // USEEFFECT RUNS EVERY RENDER
  useEffect(() => {
    console.log("i am useEffect");
  });
  //WE CAN HAVE MULTIPLE USEEFFECT, IF YOU MISS AN ARRAY(DEPENDENCY)[], USEEFFECT WILL RUN IN
  // EVERY RENDER

  //USEEFFECT RUNS IN FIRST RENDER ONLY
  useEffect(() => {
    console.log("i am useEffect");
  }, []);
  useEffect(() => {});

  //IT WILL RUN IN THE FIRST RENDER.
  //IT WILL ALSO RUN WHEN COUNT SPLIT VALUE IS CHANGED
  useEffect(() => {}, [count]);

  //dependency array [] ma bahira ko varieble or function matra rakhne useEffect vitra ko ta aafai
  // run vaihalxa, example:- a rakhna pardaina
  useEffect(() => {
    let a = 10;
    console.log(a);
  }, [a]);

  return <div>LearnUseEffect2</div>;
};

export default LearnUseEffect2;
