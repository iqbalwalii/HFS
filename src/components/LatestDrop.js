import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import single from "../styles/Single.module.css";
import SingleImage from "./SingleImage";
import Image from "next/image";
import { connect } from "react-redux";
import { getProducts } from "../services/product";
import { useRouter } from "next/router";
const SingleProduct = (props) => {
  const { product } = props;
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [items, setItems] = useState({
    size: null,
    quantity: 1,
  });
  useEffect(() => {
    getProducts().then((res) => {
      props.dispatch({
        type: "SET_PRODUCT",
        payload: res.products[Math.floor(Math.random() * res.products.length)],
      });
    });
  }, []);
  const onChangeHandler = (e) => {
    console.log(e.target.id);
    setActive(e.target.id);
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
      {product && (
        <Row style={{ marginTop: "8rem", marginBottom: "5rem" }}>
          <Col xs={10} md={{ span: 4, offset: 1 }}>
            <SingleImage productImages={product?.images} />
          </Col>
          <Col xs={10} md={6} className="justify-content-xs-center">
            <h2>{product?.name}</h2>
            <h5 className="priceTag">{product?.price}</h5>
            <div className={single.size}>
              <Button
                variant="outline-dark "
                id="4"
                className={active == 4 ? "active" : "null"}
                onClick={onChangeHandler}
              >
                4
              </Button>
              <Button
                variant="outline-dark"
                id="5"
                className={active == 5 ? "active" : "null"}
                onClick={onChangeHandler}
              >
                5
              </Button>
              <Button
                variant="outline-dark"
                id="6"
                className={active == 6 ? "active" : "null"}
                onClick={onChangeHandler}
              >
                6
              </Button>
              <Button
                variant="outline-dark"
                id="7"
                className={active == 7 ? "active" : "null"}
                onClick={onChangeHandler}
              >
                7
              </Button>
              <Button
                variant="outline-dark"
                id="8"
                className={active == 8 ? "active" : "null"}
                onClick={onChangeHandler}
              >
                8
              </Button>
              <Button
                variant="outline-dark"
                id="9"
                className={active == 9 ? "active" : "null"}
                onClick={onChangeHandler}
              >
                9
              </Button>
              <Button
                variant="outline-dark"
                id="10"
                className={active == 10 ? "active" : "null"}
                onClick={onChangeHandler}
              >
                10
              </Button>
              <Button
                variant="outline-dark"
                id="8.5"
                className={active == 8.5 ? "active" : "null"}
                onClick={onChangeHandler}
              >
                8.5
              </Button>
              <Button
                variant="outline-dark"
                id="9.5"
                className={active == 9.5 ? "active" : "null"}
                onClick={onChangeHandler}
              >
                9.5
              </Button>
              <Button
                variant="outline-dark"
                id="10.5"
                className={active == 10.5 ? "active" : "null"}
                onClick={onChangeHandler}
              >
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
              <span style={{ color: "green" }}> In Stock</span>
            </p>
            <div className="d-grid gap-2">
              <Button
                variant="outline-dark"
                size="lg"
                onClick={onSubmitHandler}
              >
                Add to Cart
              </Button>
              <Button variant="outline-dark" size="lg">
                Pay
              </Button>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};
export default connect(mapStateToProps)(SingleProduct);
