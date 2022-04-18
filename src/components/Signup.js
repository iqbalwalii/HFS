import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import signin from "../styles/Login.module.css";
import ACTIONS from "../utils/store/actions";
import { connect } from "react-redux";
import Axios from "../utils/axios";
const Signup = (props, { dispatch }) => {
  console.log("SIGNNNNNNN", props);
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
  });
  useEffect(() => {
    props?.userData?.email && router.push("/");
  }, []);
  const onClickHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post("/api/users/register", {
        ...user,
      });
      if (data.message) {
        console.log(data.message);
      } else {
        router.push("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
                  value={user.email}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      email: e.target.value,
                    })
                  }
                />
                <Form.Text className="text-muted">
                  We&apos;ll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={user.name}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      name: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      password: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <div className="d-flex flex-column justify-content-center">
                <Button variant="dark" onClick={onClickHandler}>
                  Sign Up
                </Button>
                <Link href="/signin">
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
const mapStateToProps = (state) => {
  console.log(state.userData);
  return { ...state };
};
export default connect(mapStateToProps)(Signup);
