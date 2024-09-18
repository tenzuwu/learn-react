// import React from "react";

// const Home = () => {
//   return <div>Home</div>;
// };

// export default Home;

const Home = (props) => {
  return (
    <div>
      This is home page. My name is {props.name}. my number is {props.number}{" "}
    </div>
  );
};

export default Home;
