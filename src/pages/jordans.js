import React from "react";
import Shopping from "../components/ProductListing";
import Image from "next/image";
const jordans = () => {
  return (
    <div>
      <Shopping brand={"jordans"} />
    </div>
  );
};

export async function getServerSideProps(_ctx) {
  console.log("xxx", _ctx);
  const { searchTerm } = _ctx.query;
  return {
    props: {
      searchTerm,
    },
  };
}
export default jordans;
