import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import dashboard from "../../styles/Dashboard.module.css";
import {
  BagCheckFill,
  BorderAll,
  ListCheck,
  PersonFill,
} from "react-bootstrap-icons";

const index = () => {
  return (
    <div>
      <Row className={dashboard.main}>
        <Col xs={10} md={3} className={dashboard.left}>
          <h4>HFS</h4>
          <ul>
            <li>
              <BorderAll />
              &nbsp; Dashboard
            </li>
            <li>
              <BagCheckFill />
              &nbsp; Orders
            </li>
            <li>
              <PersonFill />
              &nbsp; Users
            </li>
            <li>
              <ListCheck />
              &nbsp; Products
            </li>
          </ul>
        </Col>
        <Col xs={10} md={8} className={dashboard.right}>
          <Row>
            <Col xs={10} md={{ span: 2, offset: 1 }}>
              <div className={dashboard.card}>
                <h6>ORDERS</h6>
                <div className={dashboard.num}></div>
              </div>
            </Col>
            <Col xs={10} md={2}>
              <div className={dashboard.card}>
                <h6>ORDERS</h6>
                <div className={dashboard.num}></div>
              </div>
            </Col>
            <Col xs={10} md={2}>
              <div className={dashboard.card}>
                <h6>ORDERS</h6>
                <div className={dashboard.num}></div>
              </div>
            </Col>
            <Col xs={10} md={2}>
              <div className={dashboard.card}>
                <h6>ORDERS</h6>
                <div className={dashboard.num}></div>
              </div>
            </Col>
            <Col xs={10} md={2}>
              <div className={dashboard.card}>
                <h6>ORDERS</h6>
                <div className={dashboard.num}></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10} md={{ span: 4, offset: 2 }}></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default index;
