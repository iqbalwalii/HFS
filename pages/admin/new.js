<<<<<<< HEAD
import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
const Add = () => {
  const onClickHandler = (e) => {
    e.preventDefault();
  };
  const [form, setForm] = useState("");
  return (
    //Add Products
    <Container>
      <h3 className="text-center mt-4 mb-2"> Add Product</h3>
      <Form>
        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Shoe Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Desciption (short)</Form.Label>
          <Form.Control type="text" placeholder="Shoe Description" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Features</Form.Label>
          <Form.Control type="text" placeholder="Full Features of Shoe" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Main Image</Form.Label>
          <Form.Control type="file" accept="image/png" />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Additional Images of the shoe</Form.Label>
          <Form.Control type="file" multiple accept="image/png" />
        </Form.Group>
        <div className="d-grid mb-4">
          <Button
            variant="dark"
            size="lg"
            type="submit"
            onClick={onClickHandler}
          >
            Add
          </Button>
        </div>
      </Form>
    </Container>
  );
};
export default Add;
=======
import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
const add = () => {
  const onClickHandler = (e) => {
    e.preventDefault();
  };
  const [form, setForm] = useState("");
  return (
    <Container>
      //Add products
      <h3 className="text-center mt-4 mb-2"> Add Product</h3>
      <Form>
        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Shoe Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Desciption (short)</Form.Label>
          <Form.Control type="text" placeholder="Shoe Description" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Features</Form.Label>
          <Form.Control type="text" placeholder="Full Features of Shoe" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Main Image</Form.Label>
          <Form.Control type="file" accept="image/png" />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Additional Images of the shoe</Form.Label>
          <Form.Control type="file" multiple accept="image/png" />
        </Form.Group>
        <div className="d-grid mb-4">
          <Button
            variant="dark"
            size="lg"
            type="submit"
            onClick={onClickHandler}
          >
            Add
          </Button>
        </div>
      </Form>
    </Container>
  );
};
export default add;
>>>>>>> 491e867f2e820aa6c8c7045f6bb29bdb03e18385
