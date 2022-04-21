import React, { useState, useEffect } from "react";
import dashboard from "../../styles/Dashboard.module.css";
import Products from "../../components/admin/Products";
import Users from "../../components/admin/Users";
import Main from "../../components/admin/Main";
import Orders from "../../components/admin/Orders";
import Blog from "../../components/admin/Blog";
import { connect } from "react-redux";
import AuthLayout from "../../layout/authLayout";
import {
  BagCheckFill,
  BorderAll,
  ListCheck,
  PersonFill,
  JournalRichtext,
} from "react-bootstrap-icons";
import { useRouter } from "next/router";
import { Col, Row, Spinner } from "react-bootstrap";
import Header from "../../layout/header/adminHeader";
const Home = (props) => {
  const router = useRouter();
  const { userData } = props;
  useEffect(() => {
    userData.length === 0 || userData?.isAdmin == true
      ? null
      : router.push("/");
  }, []);
  const [display, setDisplay] = useState("main");
  return userData?.isAdmin == false ? (
    <Spinner animation="border" />
  ) : (
    <AuthLayout>
      <Row className={dashboard.main}>
        <Col xs={12} md={3} className={dashboard.left}>
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
            <li onClick={(e) => router.push("/blogger")}>
              <JournalRichtext />
              &nbsp; Blog
            </li>
            <li onClick={(e) => setDisplay("users")}>
              <PersonFill />
              &nbsp; Logout
            </li>
          </ul>
        </Col>
        <Col xs={12} md={8}>
          {display === "main" ? (
            <Main />
          ) : display === "orders" ? (
            <Orders />
          ) : display === "users" ? (
            <Users />
          ) : (
            <Products />
          )}
        </Col>
      </Row>
    </AuthLayout>
  );

  //
};

const mapStateToProps = (state) => {
  return { userData: state.userData };
};
export default connect(mapStateToProps)(Home);
