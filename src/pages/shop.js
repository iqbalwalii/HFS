import React from "react";
import Shopping from "../components/ProductListing";
import FullLayout from "../layout/fullLayout";
const Shop = (props) => {
  console.log("shop log", props);
  return (
    <FullLayout>
      <Shopping searchTerm={props?.searchTerm} brand={props?.brand} />
    </FullLayout>
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
