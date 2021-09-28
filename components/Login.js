import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import signin from "../styles/Login.module.css";
import Link from "next/link";
const Login = () => {
  return (
    <Container>
      <div className={signin.form}>
        <Row>
          <Col xs={10} md={{ span: 6, offset: 3 }}>
            <h2 className="text-center">Login</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={10} md={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="d-flex flex-column justify-content-center">
                <Button variant="dark">Login</Button>
                <Link href="">
                  <a className="text-center">Don't have an account, Sign up</a>
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;
