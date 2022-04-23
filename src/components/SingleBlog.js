import React from "react";
import Image from "next/image";
import single from "../styles/SingleBlog.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";

const SingleBlog = ({ blog }) => {
  console.log("blog", blog);
  return (
    <div>
      <img alt="blog image" src={blog?.images[0]} className={single.image} />
      <Container>
        <div className={single.rest}>
          <div className={single.title}>
            <h3>{blog?.title}</h3>
          </div>
          <div className={single.description}>
            <p className={single.para1}>{blog?.description[0]}</p>
            <p>{blog?.description[1]}</p>
            <p>{blog?.description[2]}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    blog: state.singlePost,
  };
};
export default connect(mapStateToProps)(SingleBlog);
