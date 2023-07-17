import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const PrivateRoute = ({ children }) => {
  return (
    <>
      <Header />
      <div 
    //   style={{ minHeight: "85.3vh" }}
      >{children}</div>
      <Footer />
    </>
  );
};
export default PrivateRoute;
