import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "../../components/CardBlogger";
import FullLayout from "../../layout/fullLayout";

const Home = () => {
  return (
    <FullLayout>
      <Container>
        <h1 className="text-center text-transform-capitalize">
          High Fashion Society Blog
        </h1>
        <Row>
          <Col xs={12} md={4}>
            <Card />
          </Col>
          <Col xs={12} md={4}>
            <Card />
          </Col>
          <Col xs={12} md={4}>
            <Card />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Card />
          </Col>
          <Col xs={12} md={4}>
            <Card />
          </Col>
          <Col xs={12} md={4}>
            <Card />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Card />
          </Col>
          <Col xs={12} md={4}>
            <Card />
          </Col>
          <Col xs={12} md={4}>
            <Card />
          </Col>
        </Row>
      </Container>
    </FullLayout>
  );
};

export default Home;
