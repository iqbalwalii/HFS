import React, { useEffect, useState } from "react";
import Link from "next/link";
import AuthLayout from "../../layout/AuthLayout";
import {
  Container,
  Row,
  Col,
  ListGroup,
  OverlayTrigger,
  Popover,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { Trash, PencilFill, PencilSquare } from "react-bootstrap-icons";
import Image from "next/image";
import blog from "../../styles/Blogger.module.css";
import { connect } from "react-redux";
import { deleteBlog, getBlogs } from "../../services/blogService";
const Blogger = (props) => {
  const { blogs, user } = props;
  const [list, setList] = useState(12);
  useEffect(() => {
    getBlogs().then((blogs) => {
      props.dispatch({
        type: "GET_BLOGS",
        payload: blogs.posts,
      });
    });
  }, []);
  const onDeleteHandler = (id) => {
    console.log(user?.token);
    deleteBlog(id, user?.token).then((res) => {
      console.log(res);
      getBlogs().then((blogs) => {
        props.dispatch({
          type: "GET_BLOGS",
          payload: blogs.posts,
        });
      });
    });
  };

  return (
    <AuthLayout>
      <Row className={blog.main}>
        <Col XS={12} md={3} className={blog.left}>
          <div className={blog.profile}>
            <Image
              src="/assets/images/guy.gif"
              width="90px"
              height="90px"
              alt="profile"
            />
            <h6 className={blog.username}>{user?.name}</h6>
            <p>{user?.email}</p>
          </div>
          <ul>
            <li>
              <Link href="blogger/create">
                <a>Create Post</a>
              </Link>
            </li>
            <li>Logout</li>
          </ul>
        </Col>
        <Col xs={12} md={8} className={blog.right}>
          <div className={blog.posts}>
            <h3 className="text-center">
              <span style={{ color: "#5BD1E6" }}>{user?.name}&apos;s</span>{" "}
              Latest Posts
            </h3>
            <ListGroup>
              {blogs?.slice(0, list).map((blog, index) => (
                <ListGroup.Item className="blogItem" key={index}>
                  <div>
                    ({index + 1})&nbsp;&nbsp;
                    <Link href={`/blogger/${blog?.title}`}>{blog.title}</Link>
                  </div>
                  <Button
                    variant="danger"
                    onClick={() => {
                      onDeleteHandler(blog?._id);
                    }}
                  >
                    Delete{" "}
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
            {blogs?.length > 12 && (
              <Row>
                <Col xs={12} md={{ span: 4, offset: 4 }} className="mt-4">
                  <Button variant="dark" onClick={() => setList(list + 5)}>
                    Load More
                  </Button>
                </Col>
              </Row>
            )}
          </div>
        </Col>
      </Row>
      <Link href="blogger/create">
        <a>
          <div className={blog.popup}>
            <PencilSquare color="#fff" size={24} />
          </div>
        </a>
      </Link>
    </AuthLayout>
  );
};
const mapStateToProps = (state) => ({
  user: state.userData,
  blogs: state.blogs,
});

export default connect(mapStateToProps)(Blogger);
