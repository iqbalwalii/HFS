import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Axios from "../../utils/axios";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import dashboard from "../../styles/Dashboard.module.css";
const Products = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const onDeleteHandler = () => {
    try {
    } catch (error) {
      console.log(error, "delete error");
    }
  };

  useEffect(async () => {
    const { data } = await Axios.get("/api/products");
    setProducts(data.products);
    console.log(products);
  }, []);
  async function addNewProductHandler() {
    try {
      const { data } = await Axios.post("/api/admin/products", {});
      if (data.message) {
        console.log("data.message", data);
      } else {
        router.push(`/admin/new/${data.data._id}`);
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <Container>
      <Row className={dashboard.header}>
        <Col xs={3} md={3}>
          <h4 className="mt-1">Products</h4>
        </Col>
        <Col xs={3} md={{ span: 3, offset: 6 }}>
          <Button variant="dark" onClick={addNewProductHandler}>
            Add Product
          </Button>
        </Col>
      </Row>
      <Row className={dashboard.products}>
        <ListGroup variant="flush">
          {products.map((product, index) => {
            return (
              <ListGroup.Item className={dashboard.listItem} key={index}>
                <Link href={`/admin/product/${product.slug}`}>
                  <a>
                    <h6>{product.name}</h6>
                  </a>
                </Link>

                <Link href={`/admin/new/${product._id}`}>
                  <a>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={onDeleteHandler}
                    >
                      Edit
                    </Button>
                  </a>
                </Link>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Row>
    </Container>
  );
};
export default Products;
