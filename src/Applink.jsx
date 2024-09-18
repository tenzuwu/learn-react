// import React from "react";
// import { NavLink } from "react-router-dom";

// const Applink = () => {
//   return (
//     <div>
//       <NavLink to="/" style={{ margin: "20px" }}>
//         home{" "}
//       </NavLink>
//       <NavLink to="/contact" style={{ margin: "20px" }}>
//         Contact{" "}
//       </NavLink>
//       <NavLink to="/about" style={{ margin: "20px" }}>
//         About{" "}
//       </NavLink>
//     </div>
//   );
// };

// export default Applink;

import { NavLink } from "react-router-dom";

const AppLink = () => {
  return (
    <>
      <NavLink to="/" style={{ margin: "20px" }}>
        Home
      </NavLink>
      <NavLink to={"/contact"} style={{ margin: "20px" }}>
        Contact
      </NavLink>
      <NavLink to={"/about"} style={{ margin: "20px" }}>
        About
      </NavLink>
    </>
  );
};

export default AppLink;
