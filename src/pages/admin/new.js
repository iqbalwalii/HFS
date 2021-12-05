import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
const Add = () => {
  const [inputValues, setInputValues] = useState({
    brand: "",
    name: "",
    description: "",
    price: "",
    category: "",
    file: "",
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
  });
  const onClickHandler = (e) => {
    e.preventDefault();
    console.log(inputValues);
  };
  return (
    //Add Products
    <Container>
      <h3 className="text-center mt-4 mb-2"> Add Product</h3>
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
            value={inputValues.file}
            onChange={(e) =>
              setInputValues({ ...inputValues, file: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Additional First Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/png"
            value={inputValues.one}
            onChange={(e) =>
              setInputValues({ ...inputValues, one: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Additional Second Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/png"
            value={inputValues.six}
            onChange={(e) =>
              setInputValues({ ...inputValues, six: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Additional Third Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/png"
            value={inputValues.two}
            onChange={(e) =>
              setInputValues({ ...inputValues, two: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Additional Fourth Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/png"
            value={inputValues.three}
            onChange={(e) =>
              setInputValues({ ...inputValues, three: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Additional Fifth Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/png"
            value={inputValues.four}
            onChange={(e) =>
              setInputValues({ ...inputValues, four: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Additional Sixth Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/png"
            value={inputValues.five}
            onChange={(e) =>
              setInputValues({ ...inputValues, five: e.target.value })
            }
          />
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
