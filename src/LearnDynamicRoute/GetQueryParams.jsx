import React from "react";
import { useSearchParams } from "react-router-dom";

const GetQueryParams = () => {
  let [query] = useSearchParams();

  return (
    <div>
      GetQueryParams
      {query.get("age")};
    </div>
  );
};

export default GetQueryParams;
