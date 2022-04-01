import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "../../utils/axios";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";
import dashboard from "../../styles/Dashboard.module.css";
import Link from "next/link";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(async () => {
    const { data } = await Axios.get("/api/orders");
    setOrders(data.orders);
    console.log(data.orders);
  }, []);
  const onUpdateHandler = (e) => {
    console.log(e);
  };
  return (
    <Container>
      <Row className={dashboard.header}>
        <Col xs={12}>
          <h3 className="text-center">Your Orders</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Table striped bordered hover className={dashboard.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Payment</th>
                <th>Order No.</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                return (
                  <tr style={{ cursor: "pointer" }} key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <Link href={`/admin/update/${order._id}`}>
                        <a>
                          {order.orderItems.map((prod) => {
                            return prod.name;
                          })}
                        </a>
                      </Link>
                    </td>
                    <td>{order.isPaid == true ? "Paid" : "Not Paid"}</td>
                    <td>{order._id}</td>
                    <td>{order.createdAt.slice(0, 10)}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Orders;
