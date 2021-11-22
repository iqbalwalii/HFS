import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
const Update = (props) => {
  const [inputValues, setInputValues] = useState({
    brand: "",
    name: "",
    description: "",
    price: "",
    category: "",
    main: "",
    other: "",
  });
  const onClickHandler = (e) => {
    e.preventDefault();
    console.log(inputValues);
  };
  console.log(props);
  return (
    //Add Products
    <Container>
      <h3 className="text-center mt-4 mb-2"> Update Product</h3>
      <Form>
        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Shoe Name"
            value={inputValues.brand}
            onChange={(e) =>
              setInputValues({ ...inputValues, brand: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridText1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Shoe Name"
            value={inputValues.name}
            onChange={(e) =>
              setInputValues({ ...inputValues, name: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridText2">
          <Form.Label>Desciption (short)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Shoe Description"
            value={inputValues.description}
            onChange={(e) =>
              setInputValues({ ...inputValues, description: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridNumber">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price of Shoe"
            value={inputValues.price}
            onChange={(e) =>
              setInputValues({ ...inputValues, price: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCategory">
          <Form.Label>Category</Form.Label>
          <Form.Select
            type="number"
            placeholder="Price of Shoe"
            value={inputValues.price}
            onChange={(e) =>
              setInputValues({ ...inputValues, price: e.target.value })
            }
          >
            <option selected disabled>
              Select Category
            </option>
            <option value="admin">Clothing</option>
            <option value="blogger">Footwear</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Main Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/png"
            value={inputValues.main}
            onChange={(e) =>
              setInputValues({ ...inputValues, main: e.target.value })
            }
          />
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
            Update
          </Button>
        </div>
      </Form>
    </Container>
  );
};
export default Update;
