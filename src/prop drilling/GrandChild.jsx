import React, { useState } from "react";
import GreatGrandChild from "./GreatGrandChild";

const GrandChild = (props) => {
  console.log("I am GrandChi");

  return (
    <div>
      GrandChild
      <GreatGrandChild />
    </div>
  );
};

export default GrandChild;
