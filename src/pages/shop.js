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
  console.log("xxx", _ctx);
  const { searchTerm } = _ctx.query;
  return {
    props: {
      searchTerm,
    },
  };
}
export default Shop;
