import React from "react";
import Cards from "../styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const ProductCard = ({ product }) => {
  const router = useRouter();
  return (
    <div className={Cards.main}>
      {product && (
        <div onClick={(e) => router.push(`/products/${product.slug}`)}>
          <Image
            src={
              product.bannerImage
                ? product.bannerImage
                : "https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/17/29/1500450899-cara-delevingne.jpg"
            }
            width="200px"
            height="170px"
            alt="product image"
            className={Cards.productImg}
          />
          <h5>{product.name}</h5>
          {/* <p>{product.description.slice(0, 99)}</p> */}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
