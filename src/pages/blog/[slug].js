import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Pagination from "../../components/PaginationBasic";
import Single from "../../components/SingleBlog";
import Card from "../../components/Card";
import FullLayout from "../../layout/fullLayout";
import { getBlog } from "../../services/blogService";
import { useRouter } from "next/router";
import { connect } from "react-redux";
const Blog = ({ blog }) => {
  const router = useRouter();
  const slug = router.query.slug;
  console.log(slug);

  return (
    <FullLayout>
      <Single blog={blog} />
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
    </FullLayout>
  );
};
const mapStateToProps = (state) => {
  return {
    blog: state.singlePost,
  };
};
export default connect(mapStateToProps)(Blog);
