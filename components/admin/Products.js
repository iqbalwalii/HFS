import React, { useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import dashboard from "../../styles/Dashboard.module.css";
import Link from "next/link";
const Products = () => {
  const [product, setProduct] = useState("");
  const onClickHandler = (e) => {
    return <></>;
  };
  return (
    <Container>
      <Row className={dashboard.header}>
        <Col xs={3} md={3}>
          Products
        </Col>
        <Col xs={3} md={{ span: 3, offset: 6 }}>
          <Link href="admin/new">
            <a>
              <Button variant="dark" onClick={onClickHandler}>
                Add Product
              </Button>
            </a>
          </Link>
        </Col>
      </Row>
      <Row className={dashboard.products}>
        <ListGroup variant="flush">
          <ListGroup.Item>Nike Kwazi</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
          <ListGroup.Item>Air Jordans</ListGroup.Item>
          <ListGroup.Item>Nike Yeezy</ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
};

export default Products;
