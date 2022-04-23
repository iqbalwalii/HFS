import Card from "../components/ProductCard";
import Blog from "../components/Bloghome";
import VideoCard from "../components/VideoCard";
import VideoCard2 from "../components/VideoCard2";
import Axios from "../utils/axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import FullLayout from "../layout/fullLayout";
import Link from "next/link";
import LatestDrop from "../components/LatestDrop";
import Image from "next/image";
export default function Home(props) {
	const { products } = props;
	return (
		<FullLayout>
			<div>
				<VideoCard />
				<Container>
					<h4 className="text-center mt-5">
						NEW<i style={{ fontWeight: "100" }}>&nbsp;ARRIVALS</i>
					</h4>
					<Row className="mainCardGrid">
						{products?.map((prod) => (
							<Col key={prod.id}>
								<Card product={prod} />
							</Col>
						))}
					</Row>
				</Container>

				<Row>
					<Col
						xs={{ span: 6, offset: 3 }}
						md={{ span: 4, offset: 4 }}
						className="d-flex justify-content-center"
					>
						<Link href="/shop" passHref>
							<Button variant="dark" className="my-2">
								View More
							</Button>
						</Link>
					</Col>
				</Row>
				<Blog />
				<Row>
					<h4 className="text-center mt-5">
						Latest<i style={{ fontWeight: "100" }}>&nbsp;Drop</i>
					</h4>
					<LatestDrop />
				</Row>

				<VideoCard2 />

				<Container>
					<h4 className="text-center mt-5">
						WHATs<i style={{ fontWeight: "100" }}>&nbsp;NEW</i>
					</h4>
					<Row className="mainCardGrid">
						{products?.map((prod) => (
							<Col key={prod.id}>
								<Card product={prod} />
							</Col>
						))}
					</Row>
					<Row>
						<Col
							xs={{ span: 6, offset: 3 }}
							md={{ span: 4, offset: 4 }}
							className="d-flex justify-content-center"
						>
							<Link href="/shop" passHref>
								<Button variant="dark" className="my-2">
									View More
								</Button>
							</Link>
						</Col>
					</Row>
				</Container>
				<Container>
					<h4 className="text-center mt-5">SHOP BY BRAND</h4>
					<Row>
						<Col
							style={{ cursor: "pointer" }}
							className=" flex-column brandHover align-items-center p-4  d-flex justify-content-center m-2 border border-dark rounded"
						>
							<Image
								src="/assets/images/Shoes/yeezy.png"
								height={250}
								width={400}
							/>
							<h5 className="bold text-uppercase mt-3">
								new balance
							</h5>
						</Col>
						<Col
							style={{ cursor: "pointer" }}
							className=" flex-column brandHover align-items-center p-4  d-flex justify-content-center m-2 border border-dark rounded"
						>
							<Image
								src="/assets/images/Shoes/yeezy.png"
								height={250}
								width={400}
							/>
							<h5 className="bold text-uppercase mt-3">
								Balanciaga
							</h5>
						</Col>
						<Col
							style={{ cursor: "pointer" }}
							className=" flex-column brandHover align-items-center p-4  d-flex justify-content-center m-2 border border-dark rounded"
						>
							<Image
								src="/assets/images/Shoes/yeezy.png"
								height={250}
								width={400}
							/>
							<h5 className="bold text-uppercase mt-3">nike</h5>
						</Col>
					</Row>
				</Container>
			</div>
		</FullLayout>
	);
}

export async function getServerSideProps() {
	const { data } = await Axios.get("/api/products?category=footwear");
	if (data && data.products) {
		return {
			props: {
				products: data.products,
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
