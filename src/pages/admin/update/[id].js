import React, { useEffect, useState } from "react";
import { Table, Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import Axios from "../../../utils/axios";
import Image from "next/image";
const Update = (props) => {
  const [items, setItems] = useState({});
  useEffect(() => {
    async function fetchOrder(id) {
      const { data } = await Axios.get(`/api/orders/${id}`);
      setItems(data.order);
      console.log(data.order);
    }
    fetchOrder(props.orderId);
  }, [props?.orderId]);
  return (
    <Container>
      <h3 className="text-center mt-3">Order Details</h3>

      <Row>
        <Col xs={12} md={3}>
          <div className="imageCon">
            {items?.orderItems?.map((prod, index) => {
              return (
                <Image
                  src={prod.image}
                  width="100px"
                  height="100px"
                  alt="product image"
                  key={index}
                />
              );
            })}
          </div>
        </Col>
        <Col xs={12} md={9} className="mt-4">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {items?.orderItems?.map((prod, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{prod.name}</td>
                    <td>{prod.quantity}</td>
                    <td>{prod.price}</td>
                  </tr>
                );
              })}
              <tr>
                <td colspan={3}>
                  <h6 className="text-end px-5">
                    <strong>TAX</strong>
                  </h6>
                </td>
                <td>
                  <strong>{items?.taxAmount}</strong>
                </td>
              </tr>
              <tr>
                <td colspan={3}>
                  <h6 className="text-end px-5">
                    <strong>TOTAL</strong>
                  </h6>
                </td>
                <td>
                  <strong style={{ color: "#f00" }}>
                    {items?.totalAmount}
                  </strong>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <ListGroup>
            <ListGroup.Item>
              Delivery Status : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {items?.isDelivered === true ? " Delivered" : "in Transit"}
            </ListGroup.Item>
            <ListGroup.Item>
              Payment Status : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {items?.isPaid === true ? " Paid" : "Not Paid"}
            </ListGroup.Item>
            <ListGroup.Item>
              Payment Method : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {items?.paymentMethod}
            </ListGroup.Item>
            <ListGroup.Item>
              Ordered Date : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {items?.createdAt?.slice(0, 10)}
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping Address : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {items?.shippingAddress?.address}, {items?.shippingAddress?.city}-
              {items?.shippingAddress?.postalCode}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default Update;
export async function getServerSideProps({ params }) {
  console.log("orderrrrrrrrr", params);
  return {
    props: {
      orderId: params.id,
    },
  };
}
