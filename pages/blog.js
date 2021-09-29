import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../components/CardBlogger";
import Pagination from "../components/PaginationBasic";
import Single from "../components/SingleBlog";
const blog = () => {
  return (
    <div>
      <Single />
      <h1 className="text-center">High Fashion Society Blog</h1>
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
    </div>
  );
};

export default blog;
