import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slide from "../components/Slider";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
const _app = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default _app;
