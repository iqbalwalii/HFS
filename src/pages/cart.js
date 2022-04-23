import React, { useEffect } from "react";
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
import { connect } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import FullLayout from "../layout/fullLayout";
const Bag = (props) => {
  console.log(props);
  const router = useRouter();
  let total = 23;
  const subTotal = (props) => {
    props.cart.map((product) => {
      total += product.price;
      return total;
    });
  };
  useEffect(() => {
    total = 0;
  }, [props]);
  return (
    <FullLayout>
      <Container>
        {props.cart.length === 0 ? (
          <div className="d-flex align-items-center flex-column">
            <Row>
              <Col xs={12} className="mt-5">
                <h3 className="text-center">Your Cart</h3>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 6, offset: 3 }}>
                <Image
                  src="/assets/images/empty.png"
                  width="550px"
                  height="300px"
                  alt="product image"
                />
                <p className="text-center my-2">Your Cart is empty</p>

                <Link href="/">
                  <a style={{ textDecoration: "none", color: "#fff" }}>
                    <div className="d-grid">
                      <Button variant="dark" className="text-center my-5">
                        Shop Now
                      </Button>
                    </div>
                  </a>
                </Link>
              </Col>
            </Row>
          </div>
        ) : (
          <>
            <Row>
              <Col>
                {props.cart.map((product) => {
                  return <CartCard product={product} key={product.id} />;
                })}
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
                $
                {props.cart.reduce((acc, item) => {
                  console.log("REDUCEEEEEEEEEEEEEEEEEEEEEEEEEEE", item);
                  return acc + item.total;
                }, 0)}
              </Col>
            </Row>
            <Row>
              <h6>Shipping and taxes calculated at checkout</h6>
            </Row>
            <div className="d-grid gap-2">
              <Button
                variant="dark"
                size="lg"
                onClick={() => {
                  router.push("/checkout");
                }}
              >
                <Cart />
                &nbsp; CHECKOUT
              </Button>
            </div>
          </>
        )}
      </Container>
    </FullLayout>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Bag);
