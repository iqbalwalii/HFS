import React, { useState } from "react";
import dashboard from "../../styles/Dashboard.module.css";
import Products from "../../components/admin/Products";
import Users from "../../components/admin/Users";
import Main from "../../components/admin/Main";
import Orders from "../../components/admin/Orders";
import Blog from "../../components/admin/Blog";
import {
  BagCheckFill,
  BorderAll,
  ListCheck,
  PersonFill,
  JournalRichtext,
} from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  const [display, setDisplay] = useState("main");
  return (
    <div>
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
    </div>
  );
};
export default Home;
