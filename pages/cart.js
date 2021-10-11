import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import basket from "../styles/Cart.module.css";
import CartCard from "../components/CartCard";
const cart = () => {
  return (
    <Container>
      <Row>
        <Col xs={3} md={3}>
          <h5>YOUR CART</h5>
        </Col>
        <Col xs={3} md={{ span: 3, offset: 6 }}>
          <div className={basket.checkout}>
            <h6>250$</h6>
            <Button variant="dark">Checkout</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <CartCard />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <p>Enter a gift note or special delivery instructions below:</p>

          <FloatingLabel
            controlId="floatingTextarea2"
            label="Special Instructions"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Row className={basket.total}>
        <Col xs={6} md={4}>
          Subtotal
        </Col>
        <Col xs={{ span: 4, offset: 2 }} md={{ span: 2, offset: 6 }}>
          $1244
        </Col>
      </Row>
      <Row>
        <h6>Shipping and taxes calculated at checkout</h6>
      </Row>
      <div className="d-grid gap-2">
        <Button variant="dark" size="lg">
          <Cart />
          &nbsp; CHECKOUT
        </Button>
      </div>
    </Container>
  );
};

export default cart;
