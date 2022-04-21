import React from "react";
import Cards from "../styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
const ProductCard = (props) => {
  const { product } = props;
  const router = useRouter();
  const onClickHandler = (prod) => {
    console.log("before", prod);
    props.dispatch({
      type: "SET_PRODUCT",
      payload: props.product,
    });
    console.log("after", props);
    router.push(`/products/${prod?.slug}`);
  };
  return (
    <div className={Cards.main}>
      {product && (
        <div onClick={(e) => onClickHandler(product)}>
          <Image
            src={
              product.bannerImage
                ? product.bannerImage
                : "https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/17/29/1500450899-cara-delevingne.jpg"
            }
            width="220px"
            height="190px"
            alt="product image"
            className={Cards.productImg}
          />
          <h5>{product.name}</h5>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    prod: state.product,
  };
};
export default connect(mapStateToProps)(ProductCard);
