import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import dashboard from "../../styles/Dashboard.module.css";
const Main = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={{ span: 2, offset: 1 }}>
          <div className={dashboard.card}>
            <h6>ORDERS</h6>
            <div className={dashboard.num}></div>
          </div>
        </Col>
        <Col xs={12} md={2}>
          <div className={dashboard.card}>
            <h6>PRODUCTS</h6>
            <div className={dashboard.num}></div>
          </div>
        </Col>
        <Col xs={12} md={2}>
          <div className={dashboard.card}>
            <h6>SUCCESSFUL</h6>
            <div className={dashboard.num}></div>
          </div>
        </Col>
        <Col xs={12} md={2}>
          <div className={dashboard.card}>
            <h6>DECLINED</h6>
            <div className={dashboard.num}></div>
          </div>
        </Col>
        <Col xs={12} md={2}>
          <div className={dashboard.card}>
            <h6>USERS</h6>
            <div className={dashboard.num}></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
