import React from "react";
import Shopping from "../components/ProductListing";
const Shop = (props) => {
  console.log("shop log", props);
  return (
    <div>
      <Shopping searchTerm={props?.searchTerm} />
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return { ...state };
// };

export async function getServerSideProps(_ctx) {
  let { searchTerm } = await _ctx.query;
  console.log("xxx", searchTerm);
  searchTerm == undefined ? (searchTerm = "") : (searchTerm = searchTerm);
  return {
    props: {
      searchTerm,
    },
  };
}
export default Shop;
