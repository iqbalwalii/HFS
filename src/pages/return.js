import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/Info.module.css";
const returns = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={{ span: 4, offset: 4 }} className={styles.return}>
          <Form>
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Control type="text" placeholder="Your Order ID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput2">
              <Form.Control
                type="text"
                placeholder="Order email id Or Phone Number"
              />
            </Form.Group>
            <div className="d-grid">
              <Button variant="dark">Start Your Return</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default returns;
