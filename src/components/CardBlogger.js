import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import blog from "../styles/BlogCard.module.css";
import Link from "next/link";
import { connect } from "react-redux";
import { getBlog } from "../services/blogService";
import { useRouter } from "next/router";
const CardBlogger = (props) => {
  const router = useRouter();
  const { detail } = props;
  console.log("hsab", detail);
  const onClickHandler = () => {
    getBlog(detail?.title).then((res) => {
      props.dispatch({
        type: "SET_POST",
        payload: res.post,
      });
      router.push(`/blog/${detail?.title}`);
    });
  };
  return (
    <div className={blog.cardMain}>
      <div className="d-flex justify-content-center">
        <Image
          src={detail?.images[0]}
          width="450px"
          alt="Blog"
          height="220px"
        />
      </div>
      {/* <p className={blog.date}>
        <span>{detail?.createdAt}</span>
        <span>{detail?.author?.name}</span>
      </p> */}
      <h5 className="text-center p-1">{detail?.title?.slice(0, 25)}</h5>
      <p className="text-center p-2">
        {detail?.description[0].slice(0, 100)}...
      </p>
      <div className="d-flex justify-content-center">
        <Button variant="dark" onClick={onClickHandler}>
          See more
        </Button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("salaaaaam", state);
  return {
    post: state.singlePost,
  };
};
export default connect(mapStateToProps)(CardBlogger);
