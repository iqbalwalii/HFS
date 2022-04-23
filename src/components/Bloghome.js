import React, { useEffect } from "react";
import BlogCard from "../components/BlogCard.js";
import blog from "../styles/Blog.module.css";
import { getBlogs } from "../services/blogService";
import { connect } from "react-redux";
import { Container, Col, Row, Button } from "react-bootstrap";
import Link from "next/link";
const Bloghome = (props) => {
  useEffect(() => {
    getBlogs()
      .then((blogs) => {
        console.log(blogs);
        props.dispatch({
          type: "GET_BLOGS",
          payload: blogs.posts,
        });
      })
      .catch((err) => {
        console.log("EndPoint Galat", err);
      });
  }, []);
  const { blogs } = props;
  console.log("peheraaa", props.blogs);
  return (
    <Container className={blog.main}>
      <h4 className="text-center mt-5">
        SNEAKER<i style={{ fontWeight: "100" }}>NEWS</i>
      </h4>

      <div className={blog.cards}>
        <Row className="justify-content-center">
          {blogs?.slice(0, 4).map((blog, index) => {
            return (
              <Col sm={8} md={6} key={index}>
                <BlogCard data={blog} />
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col
            xs={{ span: 6, offset: 3 }}
            md={{ span: 4, offset: 4 }}
            className="d-flex justify-content-center"
          >
            <Link href="/blog" passHref>
              <Button variant="dark" className="my-2">
                View More
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
      {/* Blog Cards */}
      {/* Blog Cards */}
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};
export default connect(mapStateToProps)(Bloghome);
