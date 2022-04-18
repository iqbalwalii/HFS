import React from "react";
import BlogCard from "../components/BlogCard.js";
import blog from "../styles/Blog.module.css";

import { Container, Col, Row, Button } from "react-bootstrap";

const Bloghome = () => {
  return (
    <Container className={blog.main}>
      <h4 className="text-center mt-5">
        SNEAKER<i style={{ fontWeight: "100" }}>NEWS</i>
      </h4>

      {/* Blog Cards */}
      {/* Blog Cards */}
      <div className={blog.cards}>
        <Row className="justify-content-center">
          <Col sm={8} md={6}>
            <BlogCard />
          </Col>
          <Col sm={8} md={6}>
            <BlogCard />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={8} md={6}>
            <BlogCard />
          </Col>
          <Col sm={8} md={6}>
            <BlogCard />
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 6, offset: 3 }}
            md={{ span: 4, offset: 4 }}
            className="d-flex justify-content-center"
          >
            <Button variant="dark" className="mb-2">
              View More
            </Button>
          </Col>
        </Row>
      </div>
      {/* Blog Cards */}
      {/* Blog Cards */}
    </Container>
  );
};

export default Bloghome;
