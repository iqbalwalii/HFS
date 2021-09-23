import React from "react";
import BlogCard from "../components/BlogCard.js";
import blog from "../styles/Blog.module.css";

import { Container, Col, Row } from "react-bootstrap";

const Bloghome = () => {
  return (
    <div className={blog.main}>
      <h4>
        WHAT<i style={{ fontWeight: "100" }}>'s on</i>
      </h4>
      <p>Hello Worldksjd sdkjs dkjs dk </p>
      {/* Blog Cards */}
      {/* Blog Cards */}
      <Container className={blog.cards}>
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
      </Container>
      {/* Blog Cards */}
      {/* Blog Cards */}
    </div>
  );
};

export default Bloghome;
