import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import FullLayout from "../layout/fullLayout";
import Link from "next/link";
const Orders = () => {
  return (
    <FullLayout>
      <Container>
        <h4 className="text-center">Order History </h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Total Price</th>
              <th>Delivery Status</th>
              <th>Order Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link href="/">
                  <a>1</a>
                </Link>
              </td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>
                <Link href="/">
                  <a>1</a>
                </Link>
              </td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>
                <Link href="/">
                  <a>1</a>
                </Link>
              </td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>
                <Link href="/">
                  <a>1</a>
                </Link>
              </td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </FullLayout>
  );
};

export default Orders;
