import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import blog from "../styles/BlogCard.module.css";
const CardBlogger = () => {
  return (
    <div className={blog.cardMain}>
      <div className="d-flex justify-content-center">
        <Image
          src="/assets/images/shoes/yeezy.png"
          width="250px"
          alt="Blog"
          height="150px"
        />
      </div>
      <p className={blog.date}>
        <span>Aug 15 2021</span>
        <span>Josh Ford</span>
      </p>
      <h5 className="text-center">
        NIKE KWAZEI PRO MAX ULTRA 5G NEW CONCEPT Z1 NEW
      </h5>
      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores facere
        similique eveniet maxime eum minima non enim. Perspiciatis quia,
        sapiente aut fuga dolor quibusdam quam veniam, hhj cupiditate molestiae
        officia doloremqu huy kdsd kk
      </p>
      <div className="d-flex justify-content-center">
        <Button variant="dark"> See more</Button>
      </div>
    </div>
  );
};

export default CardBlogger;
