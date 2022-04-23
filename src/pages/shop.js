import React from "react";
import Shopping from "../components/ProductListing";
import FullLayout from "../layout/fullLayout";
const Shop = (props) => {
	console.log("shop log>>");
	console.log("shop log>>");
	console.log("shop log>>");
	console.log("shop log>>", props);
	console.log("shop log>>");
	console.log("shop log>>");
	return (
		<FullLayout>
			<Shopping searchTerm={props?.searchTerm} brand={props?.brand} />
		</FullLayout>
	);
};
export async function getServerSideProps(_ctx) {
	let { searchTerm } = await _ctx.query;
	let { brand } = await _ctx.query;
	const options = {};
	console.log("xxx", searchTerm);
	console.log("query>>>>");
	console.log("query>>>>");
	console.log("query>>>>", _ctx.query);
	console.log("query>>>>");
	console.log("query>>>>");
	if (brand && brand.trim()) {
		options.brand = brand;
	}
	if (searchTerm && searchTerm.trim()) {
		options.searchTerm = searchTerm;
	}
	return {
		props: options,
	};
}
export default Shop;
