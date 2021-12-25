import React from "react";
import Shopping from "../components/ProductListing";
import { connect } from "react-redux";
import { useRouter } from "next/router";
const Shop = (props) => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <Shopping term={router.query.query} />
    </div>
  );
};
// const mapStateToProps = (state) => {
//   return { ...state };
// };
export default Shop;
