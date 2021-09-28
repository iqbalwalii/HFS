import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../components/CardBlogger";
import Pagination from "../components/PaginationBasic";
import Single from "../components/SingleBlog";
const blog = () => {
  return (
    <Container>
      <h1 className="text-center">High Fashion Society Blog</h1>
      <Single />
      {/* <Row>
        <Col xs={12} md={4}>
          <Card />
        </Col>
        <Col xs={12} md={4}>
          <Card />
        </Col>
        <Col xs={12} md={4}>
          <Card />
        </Col>
      </Row> */}
      {/* <Pagination /> */}
    </Container>
  );
};

export default blog;
