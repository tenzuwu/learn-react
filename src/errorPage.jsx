import React from "react";
import { useNavigate } from "react-router-dom";

const errorPage = () => {
  let navigate = useNavigate();
  return (
    <>
      {/* <div>  </div> */}
      <br />
      <button
        onClick={() => {
          navigate = "/";
        }}
      >
        error page
      </button>
    </>
  );
};

export default errorPage;
