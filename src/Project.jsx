import React from "react";
import NavBar from "./Project/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./Project/Footer";
import CreateProject from "./Project/CreateProduct";
import ReadAllProduct from "./Project/ReadAllProduct";
import ReadSpecificProduct from "./Project/ReadSpecificProduct";
import EditProduct from "./Project/EditProduct";

const Project = () => {
  // http://localhost:3000/products => read all products
  // http://localhost:3000/products/create => form to create product
  // http://localhost:3000/products/:id => read specific product
  // http://localhost:3000/products/update/:id => form to edit a   product

  //api

  // POST => http://localhost:3000/product
  // data ={
  // name: "cjarger",
  // quantity:12,
  // price: 500,
  // featured; true,

  // }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar />
              <Outlet />
              <Footer />
            </div>
          }
        >
          <Route index element={<div> Home page</div>}></Route>
          <Route
            path="products"
            element={
              <div>
                {" "}
                <Outlet />{" "}
              </div>
            }
          >
            <Route index element={<ReadAllProduct />}></Route>
            <Route path="edit" element={<EditProduct />}></Route>

            <Route path="create" element={<CreateProject />}></Route>
            <Route path=":id" element={<ReadSpecificProduct />}></Route>
            <Route
              path="update"
              element={
                <div>
                  {" "}
                  <Outlet />
                </div>
              }
            >
              <Route index element={<div>update page</div>}></Route>
              <Route
                path=":id"
                element={<div>form to edit and update a product</div>}
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Project;
