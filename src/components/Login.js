import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import signin from "../styles/Login.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import ACTIONS from "../utils/store/actions";
import Axios from "../utils/axios";
import { connect } from "react-redux";
const Login = (props) => {
  const { alert, userData } = props;
  const router = useRouter();
  useEffect(() => {
    props.userData && props.userData.email ? router.push("/") : null;
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onClickHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post("/api/users/auth/login", {
        ...user,
      });
      if (data.message) {
        props.dispatch({
          type: ACTIONS.SET_ALERT,
          payload: {
            message: data.message,
            variant: "danger",
          },
        });
      } else {
        console.log("resp success", data);

        props.dispatch({
          type: "ADD_USER",
          payload: {
            id: data.user.id,
            name: data.user.name,
            isAdmin: data.user.isAdmin,
            email: data.user.email,
            token: data.user.token,
          },
        });
        router.push("/");
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
            <h2 className="text-center">Login</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={{ span: 6, offset: 3 }}>
            <Form>
              {alert?.message && (
                <Alert variant="danger">{alert?.message}</Alert>
              )}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
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
                  Login
                </Button>
                <Link href="auth/signup">
                  <a className="text-center">
                    Don&apos;t have an account, Sign up
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
  return { userData: state.userData, alert: state.alert };
};
export default connect(mapStateToProps)(Login);
