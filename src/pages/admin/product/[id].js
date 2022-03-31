import React, { useEffect, useState } from "react";
import { Table, Container, Row, Col, Button, ListGroup } from "react-bootstrap";
// import Axios from "../../../utils/axios";
import Image from "next/image";
import Link from "next/link";
const OrderDetail = (props) => {
  const [items, setItems] = useState({});
  useEffect(() => {
    async function fetchOrder(slug) {
      // const { data } = await Axios.get(`/api/products/${slug}`);
      data = {};
      setItems(data.product);
      console.log(data.product);
    }
    fetchOrder(props.productSlug);
  }, []);
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h3 className="text-center mt-3">Product Details</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={3}>
          <div className="imageCon">
            <Image src="/assets/images/pant1.jpg" width="50px" height="80px" />
            <Image src="/assets/images/pant1.jpg" width="50px" height="80px" />
            <Image src="/assets/images/pant1.jpg" width="50px" height="80px" />
            <Image src="/assets/images/pant1.jpg" width="50px" height="80px" />
            <Image src="/assets/images/pant1.jpg" width="50px" height="80px" />
            <Image src="/assets/images/pant1.jpg" width="50px" height="80px" />
          </div>
          {/* {items?.images.map(
              (img)=>{
                  return {
                      <Image src={img.url} width='50px' height='80px' alt='product image'/>
                  }
              }
          )} */}
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
  );
};
export default OrderDetail;
export async function getServerSideProps({ params }) {
  console.log("Productssssss", params);
  return {
    props: {
      productSlug: params.id,
    },
  };
}
