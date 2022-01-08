import React from "react";
import Shopping from "../components/ProductListing";
const Shop = (props) => {
  console.log("shop log", props);
  return (
    <div>
      <Shopping searchTerm={props?.searchTerm} brand={props?.brand} />
    </div>
  );
};
export async function getServerSideProps(_ctx) {
  let { searchTerm } = await _ctx.query;
  let { brand } = await _ctx.query;
  console.log("xxx", searchTerm);
  searchTerm == undefined ? (searchTerm = "") : (searchTerm = searchTerm);
  brand == undefined ? (brand = "") : (brand = brand);
  return {
    props: {
      searchTerm,
      brand,
    },
  };
}
export default Shop;
