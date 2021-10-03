import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "../../components/CardBlogger";
import Pagination from "../../components/PaginationBasic";
import Single from "../../components/SingleBlog";
const blog = () => {
  return (
    <div>
      <Single />
      <h1 className="text-center">High Fashion Society Blog</h1>
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
        <Col
          xs={{ span: 2, offset: 8 }}
          md={{ span: 4, offset: 4 }}
          className="d-flex justify-content-center"
        >
          <Button variant="dark">More</Button>
        </Col>
      </Row>
    </div>
  );
};

export default blog;
