import React, { useContext } from "react";
import { Context } from "../App";

const GreatGrandChild = (props) => {
  let value = useContext(Context);
  // console.log(value);

  return (
    <div>
      GreatGrandChild {value.name}
      <br />
      <button
        onClick={() => {
          value.setName("hari");
        }}
      >
        change name
      </button>
    </div>
  );
};

export default GreatGrandChild;
