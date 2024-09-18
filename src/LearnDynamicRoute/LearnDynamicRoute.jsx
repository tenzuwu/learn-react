import React from "react";
import { useParams } from "react-router-dom";

const LearnDynamicRoute = () => {
  let params = useParams();
  return (
    <div>
      LearnDynamicRoute
      <br /> {params.id1} <br /> {params.id2}
    </div>
  );
};

export default LearnDynamicRoute;
