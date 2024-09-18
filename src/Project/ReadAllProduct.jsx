import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ReadAllProduct = () => {
  let [product, setProduct] = useState([]);
  let navigate = useNavigate();

  let data = {
    product: product,
  };
  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3000/product`,
        method: "get",
        data: data,
      });
      setProduct(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      let result = await axios({
        url: `http://localhost:3000/product/${id}`,
        method: "delete",
      });
      console.log(result);
    } catch (error) {}
  };

  let alertToast = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed === true) {
        handleDelete(id);
      }
    });
  };
  return (
    <div>
      {product.map((item, i) => {
        return (
          <div
            key={i}
            style={{
              border: "solid gray 3px",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              src={item.productImage}
              alt="product image"
              style={{ width: "80px", height: "80px" }}
            />

            <div>Name is : {item.name}</div>
            <div>Quantity is : {item.quantity}</div>
            <div>Price is : {item.price}</div>
            <br />
            <button
              style={{ margin: "5px", cursor: "pointer" }}
              onClick={() => {
                navigate(`/products/${item._id}`);
              }}
            >
              View
            </button>
            <button
              style={{ margin: "5px", cursor: "pointer" }}
              onClick={() => {
                navigate(`/products/edit`);
              }}
            >
              Edit
            </button>
            <button
              style={{ margin: "5px", cursor: "pointer" }}
              onClickCapture={() => {
                alertToast(item._id);
              }}
            >
              {" "}
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllProduct;
