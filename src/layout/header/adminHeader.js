import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Image from "next/image";
import Axios from "../../utils/axios";
import Navstyle from "../../styles/Navbar.module.css";
import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next//router";
const Navigation = (props) => {
  const router = useRouter();
  console.log("props", props);
  return (
    <div className={Navstyle.nav}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">HFS-Admin Panel</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* <Navbar.Collapse id="responsive-navbar-nav" className="adminPanel">
              <Nav className="me-auto">
                <Nav.Link href="#features">Orders</Nav.Link>
                <Nav.Link href="#pricing">Products</Nav.Link>
                <Nav.Link href="#pricing">Users</Nav.Link>
                <Nav.Link href="#pricing">Blog</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  Logout
                </Nav.Link>
              </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
