import React, { useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
  Button,
  Form,
} from "react-bootstrap";
import single from "../styles/Single.module.css";
import SingleImage from "./SingleImage";
import Image from "next/image";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import ACTION from "../utils/store/actions";
const SingleProduct = (props) => {
  const router = useRouter();
  const { product } = props;
  const [items, setItems] = useState({
    size: null,
    quantity: 1,
  });
  const onChangeHandler = (e) => {
    setItems({
      ...items,
      size: e.target.id,
    });
  };
  const onSubmitHandler = () => {
    props.dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...product,
        selectedSize: items.size,
        quantity: items.quantity,
        total: product.price * items.quantity,
      },
    });
    router.push("/cart");
  };

  return (
    <Container>
      <Row>
        <Col xs={10} md={5}>
          <SingleImage product={product} />
        </Col>
        <Col
          xs={10}
          md={{ span: 5, offset: 1 }}
          className="justify-content-xs-center"
        >
          <h2>{product.name}</h2>
          <h4 style={{ color: "#f00" }}>${product.price}</h4>
          <div className={single.size}>
            <Button variant="outline-dark" id="4" onClick={onChangeHandler}>
              4
            </Button>
            <Button variant="outline-dark" id="5" onClick={onChangeHandler}>
              5
            </Button>
            <Button variant="outline-dark" id="6" onClick={onChangeHandler}>
              6
            </Button>
            <Button variant="outline-dark" id="7" onClick={onChangeHandler}>
              7
            </Button>
            <Button variant="outline-dark" id="8" onClick={onChangeHandler}>
              8
            </Button>
            <Button variant="outline-dark" id="9" onClick={onChangeHandler}>
              9
            </Button>
            <Button variant="outline-dark" id="10" onClick={onChangeHandler}>
              10
            </Button>
            <Button variant="outline-dark" id="8.5" onClick={onChangeHandler}>
              8.5
            </Button>
            <Button variant="outline-dark" id="9.5" onClick={onChangeHandler}>
              9.5
            </Button>
            <Button variant="outline-dark" id="10.5" onClick={onChangeHandler}>
              10.5
            </Button>
          </div>
          <Form.Select
            id="dropdown-basic-button"
            title="Quantity&nbsp;&nbsp;&nbsp;"
            variant="light"
            className={single.quantity}
            value={items.quantity}
            onChange={(e) =>
              setItems({
                ...items,
                quantity: e.target.value,
              })
            }
          >
            <option href="#/action-1">1</option>
            <option href="#/action-2">2</option>
            <option href="#/action-3">3</option>
            <option href="#/action-3">4</option>
            <option href="#/action-3">5</option>
            <option href="#/action-3">6</option>
            <option href="#/action-3">7</option>
            <option href="#/action-3">8</option>
            <option href="#/action-3">9</option>
            <option href="#/action-3">10</option>
          </Form.Select>
          <p>
            <strong>Availibilty:</strong>{" "}
            <span style={{ color: "red" }}> Sold out!</span>
          </p>
          <div className="d-grid gap-2">
            <Button variant="outline-dark" size="lg" onClick={onSubmitHandler}>
              Add to Cart
            </Button>
            <Button variant="outline-dark" size="lg">
              Pay
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(SingleProduct);
