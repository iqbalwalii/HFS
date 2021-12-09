import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import Axios from "../../../utils/axios";
const orderDetail = (props) => {
  useEffect(() => {
    async function fetchOrder(id) {
      const { data } = await Axios.get(`/api/orders/${id}`);
      console.log("Maaaaaaaaaaaaaaaaal", data);
    }
    fetchOrder(props.orderId);
  }, []);
  return (
    <Container>
      <Row>
        <Col xs={12} md={3}></Col>
        <Col xs={12} md={9}></Col>
      </Row>
    </Container>
  );
};

export default orderDetail;
export async function getServerSideProps({ params }) {
  console.log("orderrrrrrrrr", params);
  return {
    props: {
      orderId: params.id,
    },
  };
}
