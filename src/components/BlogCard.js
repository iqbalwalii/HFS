import React from "react";
import blog from "../styles/Blog.module.css";
import Image from "next/image";
import Link from "next/link";
const BlogCard = ({ data }) => {
  return (
    <div className={blog.blogcard}>
      <Image
        // src={`/${data.images[0]}`}
        src={data.images[0]}
        height="150px"
        width="150px"
        alt="blog image"
      />
      <div className={blog.container}>
        <h6>{data.title}</h6>
        <p>{data.description[0].slice(0, 100)}</p>
        <Link href={`/blog/${data?.title}`}>
          <h5>READ MORE</h5>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
