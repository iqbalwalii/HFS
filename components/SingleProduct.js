import React from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
  Button,
} from "react-bootstrap";
import single from "../styles/Single.module.css";
import SingleImage from "./SingleImage";
import Image from "next/image";

const SingleProduct = () => {
  return (
    <Container>
      <Row>
        <Col xs={10} md={5}>
          <SingleImage />
        </Col>
        <Col
          xs={10}
          md={{ span: 5, offset: 1 }}
          className="justify-content-xs-center"
        >
          <h2>NIKE 200W MR KDF</h2>
          <h6>$189.0</h6>
          <div className={single.size}>
            <Button variant="outline-dark">4</Button>
            <Button variant="outline-dark">5</Button>
            <Button variant="outline-dark">6</Button>
            <Button variant="outline-dark">7</Button>
            <Button variant="outline-dark">8</Button>
            <Button variant="outline-dark">9</Button>
            <Button variant="outline-dark">10</Button>
            <Button variant="outline-dark">8.5</Button>
            <Button variant="outline-dark">9.5</Button>
            <Button variant="outline-dark">10.5</Button>
          </div>
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
          <p>
            <strong>Availibilty:</strong>{" "}
            <span style={{ color: "red" }}> Sold out!</span>
          </p>
          <div className="d-grid gap-2">
            <Button variant="outline-dark" size="lg">
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
export default SingleProduct;
