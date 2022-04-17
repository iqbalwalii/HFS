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
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/" className={Navstyle.brand}>
            <Image
              src="/assets/images/logo.png"
              alt="High Fashion Society"
              width="100px"
              height="40px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Orders</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Users</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Products</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
