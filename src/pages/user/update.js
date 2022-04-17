import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import FullLayout from "../../layout/fullLayout";
const Update = () => {
  const [field, setField] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onSubmitHandler = (e) => {
    console.log(field);
  };
  return (
    <FullLayout>
      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <h4 className="text-center mt-4">Update User</h4>
          <Form>
            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Enter Email"
                type="email"
                value={field.email}
                onChange={(e) => {
                  setField({ ...field, email: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Enter Name"
                type="text"
                value={field.name}
                onChange={(e) => {
                  setField({ ...field, name: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="Enter Password"
                type="password"
                value={field.password}
                onChange={(e) => {
                  setField({ ...field, password: e.target.value });
                }}
              />
            </Form.Group>
            <div className="d-grid mt-4">
              <Button variant="dark" onClick={onSubmitHandler}>
                Update
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </FullLayout>
  );
};
export default Update;
