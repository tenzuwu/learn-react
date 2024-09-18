import React from "react";

const LearnFrom = () => {
  return (
    <div>
      <from>
        <div>
          <label htmlFor="">Name : </label>
          <input type="text" />
        </div>
        <br />

        <div>
          <label htmlFor="">email : </label>
          <input type="email" />
        </div>
        <br />

        <div>
          <label htmlFor="">password :</label>
          <input type="password" />
        </div>
        <br />
        <div>
          <label htmlFor="">Gender :</label>
          <input type="radio" />
        </div>
        <br />
        <div>
          <label htmlFor="">isMarried :</label>
          <input type="checkbox" />
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <input type="number" />
        </div>
        <br />
        <button type="submit">Submit</button>
      </from>
    </div>
  );
};

export default LearnFrom;
