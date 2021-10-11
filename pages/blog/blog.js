import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Pagination from "../../components/PaginationBasic";
import Single from "../../components/SingleBlog";
import Card from "../../components/Card";
const blog = () => {
  return (
    <div>
      <Single />
      <h4 className="text-center">
        What<i style={{ fontWeight: "100" }}>&apos;s Next</i>
      </h4>
      <p className="text-center mb-3">Hello Worldksjd sdkjs dkjs dk </p>
      <Container className="">
        <Row>
          <Col xs={12} md={12}>
            <Card />
          </Col>
        </Row>
      </Container>
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
