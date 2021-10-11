import Head from "next/head";
import Image from "next/image";
import ReactPlayer from "react-player";
import Slide from "../components/Slider";
import index from "../styles/Home.module.css";
import Card from "../components/ProductCard";
import Blog from "../components/Bloghome";
import VideoCard from "../components/VideoCard";
import SPA from "../components/SingleProduct";
import { Container, Row, Col, Button } from "react-bootstrap";
export default function Home() {
  return (
    <div className={index.main}>
      <VideoCard />
      {/* <Slide /> */}
      <h4 className="text-center">
        NEW<i style={{ fontWeight: "100" }}>&nbsp;Arrivals</i>
      </h4>
      <p className="text-center">Hello Worldksjd sdkjs dkjs dk </p>
      <Container className={index.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
      <Row>
        <Col
          xs={{ span: 2, offset: 8 }}
          md={{ span: 4, offset: 4 }}
          className="d-flex justify-content-center"
        >
          <Button variant="dark"> View More</Button>
        </Col>
      </Row>
      <Blog />

      <Slide />

      <h4 className="text-center">
        DESIGNER<i style={{ fontWeight: "100" }}>&apos;s Choice</i>
      </h4>
      <p className="text-center mb-5">Hello Worldksjd sdkjs dkjs dk </p>
      <SPA />

      <h4 className="text-center mt-5">
        WHAT<i style={{ fontWeight: "100" }}>&apos;s new</i>
      </h4>
      <p className="text-center">Hello Worldksjd sdkjs dkjs dk </p>
      <Card />
    </div>
  );
}
