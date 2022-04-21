import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "../../components/CardBlogger";
import FullLayout from "../../layout/fullLayout";
import { getBlogs } from "../../services/blogService";
import { connect } from "react-redux";
const Blogs = (props) => {
  const { blogs, userData } = props;
  console.log(blogs);
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
        console.log("EndPoint Galat");
      });
  }, []);
  return (
    <FullLayout>
      <Container>
        <h1 className="text-center text-transform-capitalize blogHeading">
          High Fashion Society Blog
        </h1>
        {blogs?.length === 0 || blogs === undefined ? (
          <h3 className="text-center mt-5">No Blog Posts</h3>
        ) : (
          <Row>
            {blogs?.map((blog, index) => (
              <Col xs={12} md={4} key={index}>
                <Card detail={blog} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </FullLayout>
  );
};
const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    userData: state.userData,
  };
};
export default connect(mapStateToProps)(Blogs);
