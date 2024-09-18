import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadSpecificProduct = () => {
  let [product, setProduct] = useState("");

  let token = localStorage.getItem("token");

  let params = useParams();

  const getSpecificData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3000/product/${params.id}`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProduct(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getSpecificData();
  }, []);
  return (
    <div
      style={{
        border: "solid gray 3px",
        margin: "10px",
        padding: "10px",
      }}
    >
      <img
        src={product.productImage}
        alt="product image"
        style={{ width: "200px", height: "150px" }}
      />
      <div>Product Name is : {product.name}</div>
      <div>Quantity is : {product.quantity}</div>
      <div>Price is : {product.price}</div>
      <div>Featured : {product.featured}</div>
      <div>Manuactured Date is : {product.manufacturedDate}</div>
      <div>Company is : {product.company}</div>
    </div>
  );
};

export default ReadSpecificProduct;
