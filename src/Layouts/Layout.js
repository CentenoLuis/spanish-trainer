import React from "react";
import Navigation from "../components/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <h3>footer</h3>
    </>
  );
};

export default Layout;
