import React, { useState } from "react";
import cart from "../styles/CartCard.module.css";
import Image from "next/image";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Button,
  DropdownButton,
  Dropdown,
  CloseButton,
  Form,
} from "react-bootstrap";
import ProductCard from "./ProductCard";
const CartCard = (props) => {
  const product = props.product;
  const onChangeHandler = (e) => {
    props.dispatch({
      type: "UPDATE_PRODUCT",
      payload: {
        slug: product.slug,
        quantity: e.target.value,
        total: parseFloat(product.price) * parseFloat(e.target.value),
      },
    });
  };
  const onDeleteHandler = (e) => {
    props.dispatch({
      type: "REMOVE_ITEM",
      payload: {
        slug: product.slug,
      },
    });
  };

  return (
    <Row>
      <Col className={cart.info} xs={12} md={3}>
        <img
          src={product?.bannerImage}
          width="100px"
          height="100px"
          alt="product image"
        />
      </Col>
      <Col className={cart.details} xs={{ span: 8, offset: 2 }} md={2}>
        <h6>{product.name}</h6>
        <p>
          <strong>Price:</strong>&nbsp; ${product.price}
        </p>
        <p>
          <strong>Size:</strong>&nbsp;{product.selectedSize}
        </p>
        <p className={cart.availibility}>
          {props.stock === true ? "in Stock " : " Out Of Stock"}
        </p>
      </Col>
      <Col className={cart.info} xs={12} md={2}>
        <Form.Select
          id="dropdown-basic-button"
          title="Quantity&nbsp;&nbsp;&nbsp;"
          variant="light"
          className="my-2"
          value={product.quantity}
          onChange={onChangeHandler}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </Form.Select>
      </Col>
      <Col className={cart.info} xs={12} md={2}>
        $ {product.total}
      </Col>
      <Col className={cart.close} md={1}>
        <CloseButton onClick={onDeleteHandler} />
      </Col>
    </Row>
  );
};
const mapStatetoProps = (state) => {
  return state;
};
export default connect(mapStatetoProps)(CartCard);
