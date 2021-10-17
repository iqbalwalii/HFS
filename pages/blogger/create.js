import React from "react";
import { Form, Button, Container, FloatingLabel } from "react-bootstrap";
const create = () => {
  return (
    <Container>
      <h3 className="text-center">CREATE YOUR BLOG POST</h3>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <FloatingLabel
        controlId="floatingTextarea2"
        label="Your content (* required)"
        className="mt-2"
      >
        <Form.Control
          as="textarea"
          placeholder="Your content (*required)"
          style={{ height: "300px", marginBottom: "1rem" }}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingTextarea2"
        label="Paragraph 2 (Optional)"
      >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ marginBottom: "1rem" }}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingTextarea2"
        label="Paragraph 3 (Optional)"
      >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ marginBottom: "1rem" }}
        />
      </FloatingLabel>
      <div className="d-grid mt-2 mb-3">
        <Button variant="dark">POST</Button>
      </div>
    </Container>
  );
};

export default create;
