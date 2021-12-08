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
  }, []);
  const onUpdateHandler = () => {
    const router = useRouter;
    router.push({
      asPath: "/admin/update",
      pathname: "/Appointment/bookingstep1",
      query: { value: "order" },
    });
  };
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
              <th>Payment</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    {order.orderItems.map((prod) => {
                      return prod.name;
                    })}
                  </td>
                  <td>{order.isPaid == true ? "Paid" : "Not Paid"}</td>
                  <td>7006554446</td>
                  <td>
                    <ButtonGroup>
                      <Link href="/admin/update">
                        <a>
                          <Link href="/admin/update">
                            <a>
                              <Button
                                variant="success"
                                onClick={onUpdateHandler}
                              >
                                Update
                              </Button>
                            </a>
                          </Link>
                        </a>
                      </Link>
                      <Button variant="danger">Delete</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Orders;
