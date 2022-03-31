import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import dashboard from "../../styles/Dashboard.module.css";
// import Axios from "../../utils/axios";
import Link from "next/link";
const Users = () => {
  const [users, setUsers] = useState([]);
  // useEffect(async () => {
  //   const { data } = await Axios.get("/api/users");
  //   setUsers(data.users);
  //   console.log(data.users);
  // }, []);
  return (
    <Container>
      <Row className={dashboard.header}>
        <Col xs={6} md={3}>
          Users
        </Col>
        <Col xs={6} md={{ span: 3, offset: 6 }}>
          <Link href="admin/user">
            <a>
              <Button variant="dark">Add User</Button>
            </a>
          </Link>
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover className={dashboard.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>{user.name}</th>
                  <th>{user.email}</th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};
export default Users;
