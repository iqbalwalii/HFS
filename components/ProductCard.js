import React from "react";
import Cards from "../styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";
const ProductCard = () => {
  return (
    <div className={Cards.main}>
      <Link href="/single">
        <a>
          <div className={Cards.backdrop}></div>
          <Image
            src="/assets/images/shoes/jordan.png"
            width="200px"
            height="170px"
            className={Cards.productImg}
          />
          <h6>NIKE 200w SSR</h6>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
