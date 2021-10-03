import Head from "next/head";
import Image from "next/image";
import Slide from "../components/Slider";
import index from "../styles/Home.module.css";
import Car from "../components/Card";
import Blog from "../components/Bloghome";
import SPA from "../components/SingleProduct";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <div className={index.Cards}>
      <Slide />
      <h4 className="text-center">
        WHAT<i style={{ fontWeight: "100" }}>'s Trending</i>
      </h4>
      <p className="text-center">Hello Worldksjd sdkjs dkjs dk </p>
      <Car />
      <Blog />

      <Slide />

      <h4 className="text-center">
        DESIGNER<i style={{ fontWeight: "100" }}>'s Choice</i>
      </h4>
      <p className="text-center mb-5">Hello Worldksjd sdkjs dkjs dk </p>
      <SPA />

      <h4 className="text-center mt-5">
        WHAT<i style={{ fontWeight: "100" }}>'s new</i>
      </h4>
      <p className="text-center">Hello Worldksjd sdkjs dkjs dk </p>
      <Car />
    </div>
  );
}
