import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import blog from "../styles/BlogCard.module.css";
import Link from "next/link";
const CardBlogger = ({ detail }) => {
  return (
    <div className={blog.cardMain}>
      <div className="d-flex justify-content-center">
        <Image
          src="/assets/images/shoes/yeezy.png"
          width="250px"
          alt="Blog"
          height="120px"
        />
      </div>
      <p className={blog.date}>
        <span>{detail?.createdAt}24</span>
        <span>{detail?.author}</span>
      </p>
      <h5 className="text-center p-1">{detail?.title?.slice(0, 25)}</h5>
      <p className="text-center p-2">
        {detail?.description[0].slice(0, 100)}...
      </p>
      <div className="d-flex justify-content-center">
        <Link href={`/blog/${detail?.title}`} passHref>
          <Button variant="dark"> See more</Button>
        </Link>
      </div>
    </div>
  );
};

export default CardBlogger;
