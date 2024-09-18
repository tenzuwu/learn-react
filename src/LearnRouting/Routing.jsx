import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home.jsx";
import About from "../About";
import LearnDynamicRoute from "../LearnDynamicRoute/LearnDynamicRoute.jsx";
import GetQueryParams from "../LearnDynamicRoute/GetQueryParams.jsx";
import Contacts from "../Contacts.jsx";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home name={"ram"} />}>
        <Route path="produc"></Route>
      </Route>

      <Route path="/:id" element={<div>Random page</div>}></Route>

      {/* <Route path="/user/:id" element={<div>Dynamic Route</div>}></Route> */}
      {/* <Route path="/user/:id" element={<LearnDynamicRoute />}> */}
      {/* {" "} */}
      {/* <Route path"*" element={404}></Route> */}
      <Route
        path="/user/:id1/create/:id2"
        element={<LearnDynamicRoute />}
      ></Route>
      <Route path="/admin" element={<GetQueryParams />}></Route>
    </Routes>
  );
};
export default Routing;
