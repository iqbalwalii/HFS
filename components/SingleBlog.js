import React from "react";
import Image from "next/image";

const SingleBlog = () => {
  return (
    <div>
      <Image
        width="100%"
        height="50%"
        alt="blog image"
        src="/assets/images/shoes/jordan.png"
      />
      <div></div>
    </div>
  );
};

export default SingleBlog;
