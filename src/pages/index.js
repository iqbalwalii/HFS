import Card from "../components/ProductCard";
import Blog from "../components/Bloghome";
import VideoCard from "../components/VideoCard";
import Axios from "../utils/axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import FullLayout from "../layout/fullLayout";
import Link from "next/link";
export default function Home(props) {
  const { error, products } = props;
  return (
    <FullLayout>
      <div>
        <VideoCard />
        <Container>
          <Row>
            <h4 className="text-center mt-5">
              NEW<i style={{ fontWeight: "100" }}>&nbsp;ARRIVALS</i>
            </h4>
            {products?.map((prod) => (
              <Col xs={6} md={3} key={prod.id}>
                <Card product={prod} />
              </Col>
            ))}
          </Row>
        </Container>
        <Row>
          <Col
            xs={{ span: 6, offset: 3 }}
            md={3}
            className="d-flex justify-content-center"
          >
            <Link href="/shop" passHref>
              <Button variant="dark" className="mb-2">
                View More
              </Button>
            </Link>
          </Col>
        </Row>
        <Blog />

        <VideoCard />

        <h4 className="text-center my-5">
          WHAT<i style={{ fontWeight: "100" }}>&apos;s new</i>
        </h4>

        <Container>
          <Row>
            <h4 className="text-center mt-5">
              WHATs<i style={{ fontWeight: "100" }}>&nbsp;NEW</i>
            </h4>
            {products?.map((prod) => (
              <Col xs={6} md={3} key={prod.id}>
                <Card product={prod} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col
              xs={{ span: 6, offset: 3 }}
              md={3}
              className="d-flex justify-content-center"
            >
              <Link href="/shop" passHref>
                <Button variant="dark" className="mb-2">
                  View More
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
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
