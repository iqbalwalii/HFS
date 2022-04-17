import React from "react";
import Header from "./header/header";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";

const FullLayout = ({ children }) => {
  return (
    <>
      <Header /> <div>{children}</div> <Footer />
    </>
  );
};

export default FullLayout;
