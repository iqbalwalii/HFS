import React from "react";
import { useRouter } from "next/router";
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
              <th>User</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>@Mark</td>
              <td>Ottoman Empire</td>
              <td>7006554446</td>
              <td>
                <ButtonGroup>
                  <Link href="/admin/update">
                    <a>
                      <Link href="/admin/update">
                        <a>
                          <Button variant="success" onClick={onUpdateHandler}>
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
            <tr>
              <td>2</td>
              <td>@Mark</td>
              <td>Ottoman Empire</td>
              <td>7006554446</td>
              <td>7006554446</td>
            </tr>
            <tr>
              <td>3</td>
              <td>@Mark</td>
              <td>Ottoman Empire</td>
              <td>7006554446</td>
              <td>7006554446</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Orders;
