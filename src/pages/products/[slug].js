import React from "react";
import SingleCard from "../../components/SingleProduct";
import Card from "../../components/Card";
import Axios from "../../utils/axios";
import Head from "next/head";

export default function Single(props) {
  let product = null;
  if (!props.error) {
    product = props.product;
  }
  if (!product)
    return (
      <div style={{ minHeight: "60vh" }}>
        <Head>
          <title>404 - Not found</title>
        </Head>
        <h2>No Product Found</h2>
      </div>
    );
  return (
    <div>
      <SingleCard product={product} />
      <h4 className="text-center">
        WHAT<i style={{ fontWeight: "100" }}>&apos;s Trending</i>
      </h4>

      {/* <Card /> */}
    </div>
  );
}

// Prefetch Product from server
export async function getServerSideProps(_ctx) {
  const { data } = await Axios.get(`/api/products/${_ctx.params.slug}`);
  if (data && data.status === 200) {
    return {
      props: {
        product: data.product,
      },
    };
  } else {
    return {
      props: {
        error: data.message,
      },
    };
  }
}
