import React from "react";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  let navigate = useNavigate();
  return (
    <>
      <div>contact</div>
    </>
  );
};

export default Contacts;

// import React from "react";

// const Contacts = () => {
//   return <div>Contacts</div>;
// };

// export default Contacts;
// import { useNavigate } from "react-router-dom";

// const Contact = () => {
//   let navigate = useNavigate();
//   return (
//     <>
//       <div>Contact</div>
//       <br />
//       <button
//         onClick={() => {
//           navigate("/about", { replace: true });
//         }}
//       >
//         Click to contact
//       </button>
//     </>
//   );
// };

// export default Contact;
