import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import dashboard from "../../styles/Dashboard.module.css";
// import Axios from "../../utils/axios";
const Main = () => {
  const [product, setProduct] = useState("");
  const [users, setUsers] = useState("");
  // useEffect(async () => {
  //   // const { data } = await Axios.get("/api/products");
  //   setProduct(data.products.length);
  //   return async () => {
  //     // const { data } = await Axios.get("/api/products");
  //     // setProduct(data.products.length);
  //   };
  // }, []);
  // useEffect(async () => {
  //   const { data } = await Axios.get("/api/users");
  //   setUsers(data.users.length);
  //   return async () => {
  //     const { data } = await Axios.get("/api/users");
  //     setUsers(data.users.length);
  //   };
  // }, []);
  return (
    <Container>
      <Row>
        <Col xs={12} md={{ span: 2, offset: 1 }}>
          <div className={dashboard.card}>
            <h6>ORDERS</h6>
            <div className={dashboard.num}>
              <span>20</span>
            </div>
          </div>
        </Col>
        <Col xs={12} md={2}>
          <div className={dashboard.card}>
            <h6>PRODUCTS</h6>
            <div className={dashboard.num}>
              <span>{product}</span>
            </div>
          </div>
        </Col>
        <Col xs={12} md={2}>
          <div className={dashboard.card}>
            <h6>SUCCESSFUL</h6>
            <div className={dashboard.num}>
              <span>0</span>
            </div>
          </div>
        </Col>
        <Col xs={12} md={2}>
          <div className={dashboard.card}>
            <h6>DECLINED</h6>
            <div className={dashboard.num}>
              <span>0</span>
            </div>
          </div>
        </Col>
        <Col xs={12} md={2}>
          <div className={dashboard.card}>
            <h6>USERS</h6>
            <div className={dashboard.num}>
              <span>{users}</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
// export async function getServerSideProps() {
//   const { data } = await Axios.get("/api/products");
//   console.log("index", data);
//   if (data && data.products) {
//     return {
//       props: {
//         products: data.products,
//       },
//     };
//   } else {
//     return {
//       props: {
//         error: data.message,
//       },
//     };
//   }
// }

export default Main;
