import React from "react";
import Header from "./header/adminHeader";
import { Container } from "react-bootstrap";

const FullLayout = ({ children }) => {
  return (
    <>
      <Header /> <div>{children}</div>
    </>
  );
};

export default FullLayout;
