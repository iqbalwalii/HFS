import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import dashboard from "../../styles/Dashboard.module.css";
import Link from "next/link";
const Users = () => {
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
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark Raffalo</td>
              <td>markraffalo@gmail.com </td>
              <td>7006554446</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jon Snow</td>
              <td>JonSnow@gmail.com</td>
              <td>7006554446</td>
            </tr>
            <tr>
              <td>3</td>
              <td>John Wick</td>
              <td>johnwick@babayaga.com</td>
              <td>7006554446</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Users;
