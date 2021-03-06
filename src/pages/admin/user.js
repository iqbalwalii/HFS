import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Button, Form, Col, Spinner } from "react-bootstrap";
import { useRouter } from "next/router";
const User = (props) => {
  const router = useRouter();
  const { userData } = props;
  const onClickHandler = (e) => {
    e.preventDefault();
    console.log(inputValues);
  };
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  useEffect(() => {
    userData.length === 0 || userData?.isAdmin == true
      ? null
      : router.push("/");
  }, []);
  return userData?.isAdmin == false ? (
    <Spinner animation="border" />
  ) : (
    <Container>
      <h3 className="text-center mt-4 mb-2"> ADD USER</h3>
      <Form>
        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Name"
            value={inputValues.name}
            onChange={(e) =>
              setInputValues({
                ...inputValues,
                name: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="Enter Email Address"
            value={inputValues.email}
            onChange={(e) =>
              setInputValues({
                ...inputValues,
                email: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={inputValues.password}
            onChange={(e) =>
              setInputValues({
                ...inputValues,
                password: e.target.value,
              })
            }
          />
        </Form.Group>

        <Form.Group controlId="formGridRole">
          <Form.Label>Select Role</Form.Label>
          <Form.Select
            required
            id="role"
            name="role"
            value={inputValues.role}
            onChange={(e) =>
              setInputValues({
                ...inputValues,
                role: e.target.value,
              })
            }
          >
            <option>Select Role</option>
            <option value="admin">Admin</option>
            <option value="blogger">Blogger</option>
            <option value="users">User</option>
          </Form.Select>
        </Form.Group>
        <div className="d-grid my-4">
          <Button variant="dark" onClick={onClickHandler}>
            Save Details
          </Button>
        </div>
      </Form>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return { userData: state.userData };
};
export default connect(mapStateToProps)(User);
