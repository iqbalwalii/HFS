import Head from "next/head";
import ReactPlayer from "react-player";
import Slide from "../components/Slider";
import index from "../styles/Home.module.css";
import Card from "../components/ProductCard";
import Blog from "../components/Bloghome";
import VideoCard from "../components/VideoCard";
import SPA from "../components/SingleProduct";
// import data from "../utils/data";
import Axios from "../utils/axios";

import { Container, Row, Col, Button } from "react-bootstrap";
export default function Home(props) {
  const { error, products } = props;
  // if (error) {
  //   return;
  // }
  return (
    <div className={index.main}>
      <VideoCard />

      {/* <Slide /> */}
      <h4 className="text-center mt-5">
        NEW<i style={{ fontWeight: "100" }}>&nbsp;ARRIVALS</i>
      </h4>
      <Container className={index.cards}>
        {products.map((prod) => (
          <Card product={prod} key={prod.id} />
        ))}
      </Container>
      <Row>
        <Col
          xs={{ span: 2, offset: 8 }}
          md={{ span: 4, offset: 4 }}
          className="d-flex justify-content-center"
        >
          <Button variant="dark" className="mb-2">
            {" "}
            View More
          </Button>
        </Col>
      </Row>
      <Blog />

      <VideoCard />
      <h4 className="text-center my-5">
        LATEST<i style={{ fontWeight: "100" }}>DROP</i>
      </h4>

      {/* <SPA /> */}

      <h4 className="text-center my-5">
        WHAT<i style={{ fontWeight: "100" }}>&apos;s new</i>
      </h4>

      <Container className={index.cards}>
        {products && products.length > 0 ? (
          products.map((prod) => <Card product={prod} key={prod._id} />)
        ) : (
          <div>
            <h2>No data Found</h2>{" "}
          </div>
        )}
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await Axios.get("/api/products?category=footwear");
  console.log("index", data);
  if (data && data.products) {
    return {
      props: {
        products: data.products,
      },
    };
  } else {
    return {
      props: {
        error: data.message,
      },
    };
  }
}
