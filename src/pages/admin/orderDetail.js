import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
const orderDetail = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Table striped bordered hover size="sm" className="mt-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{console.log(props)}</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default orderDetail;
