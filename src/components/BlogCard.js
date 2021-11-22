import React from "react";
import blog from "../styles/Blog.module.css";
import Image from "next/image";
const BlogCard = () => {
  return (
    <div className={blog.blogcard}>
      <Image
        src="/assets/images/shoes/dd.png"
        height="150px"
        width="150px"
        alt="blog image"
      />
      <div className={blog.container}>
        <h6>
          READ MORE: MODI DIES AT LAST WATCH HIS FINAL KRIYAKARAM BELOW LINK
        </h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          perferendis quo, iure asperiores itaque ducimus.
        </p>
        <h5>READ MORE</h5>
      </div>
    </div>
  );
};

export default BlogCard;
