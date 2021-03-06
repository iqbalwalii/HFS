import React, { useEffect, useState } from "react";
import {
  Table,
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  Spinner,
} from "react-bootstrap";
import Axios from "../../../utils/axios";
import Image from "next/image";
import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import FullLayout from "../../../layout/authLayout";
const OrderDetail = (props) => {
  const router = useRouter();
  const [items, setItems] = useState({});
  const { userData } = props;
  useEffect(() => {
    userData.length === 0 || userData?.isAdmin == true
      ? null
      : router.push("/");
  }, []);
  useEffect(() => {
    async function fetchOrder(slug) {
      const { data } = await Axios.get(`/api/products/${slug}`);
      setItems(data.product);
      console.log(data.product);
    }
    fetchOrder(props.productSlug);
  }, [props.productSlug]);
  console.log(items);
  return userData?.isAdmin == false ? (
    <Spinner animation="border" />
  ) : (
    <FullLayout>
      <Container>
        <Row>
          <Col xs={12}>
            <h3 className="text-center mt-3">Product Details</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3}>
            <div className="imageCon">
              {items?.images?.map((item) => {
                return (
                  <Image
                    src={item}
                    width={200}
                    height={200}
                    key={item}
                    className="image"
                  />
                );
              })}
            </div>
          </Col>
          <Col xs={12} md={9}>
            <ListGroup>
              <ListGroup.Item>
                Brand : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {items?.brand}
              </ListGroup.Item>
              <ListGroup.Item>
                Category : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {items?.category}
              </ListGroup.Item>
              <ListGroup.Item>
                Description : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {items?.description}
              </ListGroup.Item>
              <ListGroup.Item>
                Price : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {items?.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Product Added on : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {items?.createdAt?.slice(0, 10)}
              </ListGroup.Item>
              <ListGroup.Item>
                Product Updated on : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {items?.updatedAt?.slice(0, 10)}
              </ListGroup.Item>
              <ListGroup.Item>
                Product Visibility : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {items?.isActive === 0 ? (
                  <span className="red">Disabled</span>
                ) : (
                  <span className="primary">In Stock</span>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                Product Availibility : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {items?.isActive === false ? (
                  <span className="red">Out Of Stock</span>
                ) : (
                  <span className="primary">In Stock</span>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 2, offset: 5 }}>
            <Link href={`/admin/new/${items?._id}`}>
              <a>
                <Button variant="dark" size="lg" className="mt-5">
                  Edit
                </Button>
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </FullLayout>
  );
};
export async function getServerSideProps({ params }) {
  console.log("Productssssss", params);
  return {
    props: {
      productSlug: params.id,
    },
  };
}
const mapStateToProps = (state) => {
  return { userData: state.userData };
};
export default connect(mapStateToProps)(OrderDetail);
