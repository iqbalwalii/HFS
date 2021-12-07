import React, { useState, useEffect } from "react";
import dashboard from "../../styles/Dashboard.module.css";
import Products from "../../components/admin/Products";
import Users from "../../components/admin/Users";
import Main from "../../components/admin/Main";
import Orders from "../../components/admin/Orders";
import Blog from "../../components/admin/Blog";
import { connect } from "react-redux";
import {
  BagCheckFill,
  BorderAll,
  ListCheck,
  PersonFill,
  JournalRichtext,
} from "react-bootstrap-icons";
import { useRouter } from "next/router";
import { Col, Row, Spinner } from "react-bootstrap";
import Axios from "../../utils/axios";
const Home = (props) => {
  const router = useRouter();
  useEffect(() => {
    console.log("User Details", props.userData);
    Object.keys(props.userData).length === 0 || props.userData?.isAdmin == false ? router.push("/") : null;
  }, []);
  const [display, setDisplay] = useState("main");
  // {
  //   props.userData.isAdmin == false ?
  //     <Spinner animation="border" />
  //   ) : (

  return props.userData.isAdmin == false ? (
    <Spinner animation="border" />
  ) : (
    <Row className={dashboard.main}>
      <Col xs={12} md={3} className={dashboard.left}>
        <h4>HFS</h4>
        <ul>
          <li onClick={(e) => setDisplay("main")}>
            <BorderAll />
            &nbsp; Dashboard
          </li>
          <li onClick={(e) => setDisplay("orders")}>
            <BagCheckFill />
            &nbsp; Orders
          </li>
          <li onClick={(e) => setDisplay("users")}>
            <PersonFill />
            &nbsp; Users
          </li>
          <li
            onClick={(e) => setDisplay("products")}
            style={{ borderBottom: "1px solid #ccc" }}
          >
            <ListCheck />
            &nbsp; Products
          </li>
          <li onClick={(e) => setDisplay("blog")}>
            <JournalRichtext />
            &nbsp; Blog
          </li>
          <li onClick={(e) => setDisplay("users")}>
            <PersonFill />
            &nbsp; Logout
          </li>
        </ul>
      </Col>
      <Col md={{ span: 8, offset: 0 }} xs={{ span: 8, offset: 2 }}>
        {display === "main" ? (
          <Main />
        ) : display === "orders" ? (
          <Orders />
        ) : display === "users" ? (
          <Users />
        ) : display === "products" ? (
          <Products />
        ) : (
          <Blog />
        )}
      </Col>
    </Row>
  );

  //
};

const mapStateToProps = (state) => {
  return { userData: state.userData };
};
export default connect(mapStateToProps)(Home);
