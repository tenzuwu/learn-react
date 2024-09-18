import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  let [name, setName] = useState("");
  let [quantity, setQuantity] = useState(0);
  let [price, setPrice] = useState(0);
  let [featured, setFeatured] = useState("false");
  let [productImage, setProductImage] = useState("");
  let [manufacturedDate, setManufacturedDate] = useState("");
  let [company, setCompany] = useState("");

  let params = useParams();

  let companies = [
    { label: "Choose a company" },
    { label: "Apple", value: "apple" },
    { label: "Dell", value: "dell" },
    { label: "Samsung", value: "samsung" },
    { label: "Lenovo", value: "lenovo" },
  ];

  const onDrop = useCallback(async (acceptedFiles) => {
    // Do something with the files
    let fileData = acceptedFiles[0];
    let data = new FormData();
    data.append("document", fileData);
    try {
      let result = await axios({
        url: `http://localhost:3000/file/single`,
        method: "post",
        data: data,
      });
      // console.log(result);
      setProductImage(result.data.result);
    } catch (error) {}
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text "
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input
            htmlFor="number"
            name="quantity"
            id="quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="featured">Feautured :</label>
          <input
            type="checkbox"
            name="featured"
            id="featured"
            checked={featured === true}
            onChange={(e) => {
              setFeatured(e.target.checked);
            }}
          />
        </div>
        <br />
        <div {...getRootProps()}>
          <label htmlFor=""> product image :</label>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
          {productImage ? (
            <img
              src={productImage}
              alt="product image"
              style={{ height: "100px", width: "100px" }}
            />
          ) : null}
        </div>
        <br />
        <div>
          <label htmlFor="manufacturedDate">ManufacturedDate :</label>
          <input
            type="date"
            name="manufacturedDate"
            id="manudacturedDate"
            value={manufacturedDate}
            onChange={(e) => {
              setManufacturedDate(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="company">Conpmany :</label>
          <select
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          >
            {companies.map((item, i) => {
              return (
                <option key={i} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <br />
        <button>Create Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
