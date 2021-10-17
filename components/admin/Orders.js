import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import dashboard from "../../styles/Dashboard.module.css";
const Orders = () => {
  return (
    <Container>
      <Row className={dashboard.header}>
        <Col xs={12}>
          <h3 className="text-center">Your Orders</h3>
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover className={dashboard.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>User</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>@Mark</td>
              <td>Ottoman Empire</td>
              <td>7006554446</td>
            </tr>
            <tr>
              <td>2</td>
              <td>@Mark</td>
              <td>Ottoman Empire</td>
              <td>7006554446</td>
            </tr>
            <tr>
              <td>3</td>
              <td>@Mark</td>
              <td>Ottoman Empire</td>
              <td>7006554446</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Orders;
