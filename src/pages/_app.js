import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slide from "../components/Slider";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import store from "../utils/store";
import "../styles/globals.css";

const _app = ({ Component, pageProps }) => {
  // useEffect(() => {

  // }, [click])
  return (
    <Provider store={store} style={{ overflowX: "hidden" }}>
      <main className="main">
        <Component {...pageProps} />
      </main>
    </Provider>
  );
};
export default _app;
