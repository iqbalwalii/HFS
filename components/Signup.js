import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Link from "next/link";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import signin from "../styles/Login.module.css";
const Login = () => {
  return (
    <Container>
      <div className={signin.form}>
        <Row>
          <Col xs={10} md={{ span: 6, offset: 3 }}>
            <h2 className="text-center">Signup</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={10} md={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required="required"
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="d-flex flex-column justify-content-center">
                <Button variant="dark">Sign Up</Button>
                <Link href="">
                  <a className="text-center">
                    Already have an account, Sign in
                  </a>
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
