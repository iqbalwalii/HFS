import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import signin from "../styles/Login.module.css";

import Link from "next/link";
const Login = () => {
  return (
    <Container>
      <Row>
        <Col xs={10} md={{ span: 6, offset: 3 }}>
          <div className={signin.logout}>
            <p>You have Been logged out successfully</p>
            <Link href="">
              <a>Log back in</a>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
