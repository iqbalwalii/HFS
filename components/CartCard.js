import React from "react";
import cart from "../styles/CartCard.module.css";
import Image from "next/image";
import {
  Container,
  Row,
  Col,
  Button,
  DropdownButton,
  Dropdown,
  CloseButton,
} from "react-bootstrap";
const CartCard = () => {
  return (
    <Row>
      <Col className={cart.info} xs={12} md={3}>
        <Image
          src="/assets/images/shoes/jordan.png"
          width="100px"
          height="100px"
          alt="product image"
        />
      </Col>
      <Col className={cart.details} xs={{ span: 8, offset: 2 }} md={2}>
        <h6>NIKE PRO MAX ULTRA</h6>
        <p>
          <strong>Price:</strong>&nbsp; $230
        </p>
        <p>
          <strong>Size:</strong>&nbsp;L
        </p>
        <p className={cart.availibility}>Ony 8 left at this price</p>
      </Col>
      <Col className={cart.info} xs={12} md={2}>
        <DropdownButton
          id="dropdown-basic-button"
          title="Quantity&nbsp;&nbsp;&nbsp;"
          variant="light"
          className="my-2"
        >
          <Dropdown.Item href="#/action-1">1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">3</Dropdown.Item>
          <Dropdown.Item href="#/action-3">4</Dropdown.Item>
          <Dropdown.Item href="#/action-3">5</Dropdown.Item>
          <Dropdown.Item href="#/action-3">6</Dropdown.Item>
          <Dropdown.Item href="#/action-3">7</Dropdown.Item>
          <Dropdown.Item href="#/action-3">8</Dropdown.Item>
          <Dropdown.Item href="#/action-3">9</Dropdown.Item>
          <Dropdown.Item href="#/action-3">10</Dropdown.Item>
        </DropdownButton>
      </Col>
      <Col className={cart.info} xs={12} md={2}>
        $ 2375
      </Col>
      <Col className={cart.info} md={1}>
        <CloseButton />
      </Col>
    </Row>
  );
};

export default CartCard;
