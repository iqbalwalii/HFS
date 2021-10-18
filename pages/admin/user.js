<<<<<<< HEAD
import React from "react";
import { Container, Button, Form, Col } from "react-bootstrap";
const User = () => {
  return (
    <Container>
      <h3 className="text-center mt-4 mb-2"> ADD USER</h3>
      <Form>
        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email Address" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
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

export default User;
=======
import React from "react";
import { Container, Button, Form, Col } from "react-bootstrap";
const user = () => {
  return (
    <Container>
      <h3 className="text-center mt-4 mb-2"> ADD USER</h3>
      <Form>
        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email Address" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
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
>>>>>>> 491e867f2e820aa6c8c7045f6bb29bdb03e18385
