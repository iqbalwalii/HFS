import Head from "next/head";
import ReactPlayer from "react-player";
import Slide from "../components/Slider";
import index from "../styles/Home.module.css";
import Card from "../components/ProductCard";
import Blog from "../components/Bloghome";
import VideoCard from "../components/VideoCard";
import SPA from "../components/SingleProduct";
import Axios from "../utils/axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import FullLayout from "../layout/fullLayout";
export default function Home(props) {
  const { error, products } = props;
  return (
    <FullLayout>
      <Container fluid>
        <VideoCard />
        <Container>
          <Row>
            <h4 className="text-center mt-5">
              NEW<i style={{ fontWeight: "100" }}>&nbsp;ARRIVALS</i>
            </h4>
            {products?.map((prod) => (
              <Col xs={{ span: 5 }} md={3} className={index.card}>
                <Card product={prod} key={prod.id} />
              </Col>
            ))}
          </Row>
        </Container>
        <Row>
          <Col
            xs={{ span: 6, offset: 3 }}
            md={{ span: 4, offset: 4 }}
            className="d-flex justify-content-center"
          >
            <Button variant="dark" className="mb-2">
              View More
            </Button>
          </Col>
        </Row>
        <Blog />

        <VideoCard />
        {/* <h4 className="text-center my-5">
          LATEST<i style={{ fontWeight: "100" }}>DROP</i>
        </h4>

        <SPA /> */}

        <h4 className="text-center my-5">
          WHAT<i style={{ fontWeight: "100" }}>&apos;s new</i>
        </h4>

        <Container>
          <Row>
            <h4 className="text-center mt-5">
              WHATs<i style={{ fontWeight: "100" }}>&nbsp;NEW</i>
            </h4>
            {products?.map((prod) => (
              <Col xs={{ span: 5 }} md={3} className={index.card}>
                <Card product={prod} key={prod.id} />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </FullLayout>
  );
}

export async function getServerSideProps() {
  const { data } = await Axios.get("/api/products?category=footwear");
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
