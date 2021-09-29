import Head from "next/head";
import Image from "next/image";
import Slide from "../components/Slider";
import index from "../styles/Home.module.css";
import Car from "../components/Card";
import Blog from "../components/Bloghome";
import SPA from "../components/SingleProduct";

export default function Home() {
  return (
    <div className={index.Cards}>
      <Slide />
      <h3 className="text-center mt-3">Trending</h3>
      <Car />
      <Blog />
      <SPA />
      <h3 className="text-center mt-3">Buy More</h3>
      <Car />
    </div>
  );
}
