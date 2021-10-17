import React from "react";
import { Container, Button, Form, Col } from "react-bootstrap";
const user = () => {
  return (
    <Container>
      <h3 className="text-center mt-4 mb-2"> ADD USER</h3>
      <Form>
        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Shoe Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email Address" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridText2">
          <Form.Label>Desciption (short)</Form.Label>
          <Form.Control type="text" placeholder="Shoe Description" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridText3">
          <Form.Label>Features</Form.Label>
          <Form.Control type="text" placeholder="Full Features of Shoe" />
        </Form.Group>
        <Form.Group controlId="formGridRole">
          <Form.Label>Select Role</Form.Label>
          <Form.Select id="role" name="role">
            <option>Select Role</option>
            <option value="admin">Admin</option>
            <option value="blogger">Blogger</option>
            <option value="users">User</option>
          </Form.Select>
        </Form.Group>
        <div className="d-grid my-4">
          <Button variant="dark">Save Details</Button>
        </div>
      </Form>
    </Container>
  );
};

export default user;
