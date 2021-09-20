import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navstyle from "../styles/Navbar.module.css";
const Navigation = () => {
  return (
    <div className={Navstyle.nav}>
      <Navbar bg="light" expand="xxl">
        <Container>
          <Navbar.Brand href="#home" className={Navstyle.brand}>
            <img
              src="./assets/images/logo.png"
              style={{ width: "80px", marginRight: ".2rem" }}
            />
            HIGH FASHION SOCIETY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={Navstyle.navBottom}>
              <Nav.Link href="#home">NEW ARRIVALS</Nav.Link>
              <Nav.Link href="#link">BEST SELLERS</Nav.Link>
              <Nav.Link href="#link">AIR JORDANS</Nav.Link>
              <Nav.Link href="#link">NIKE</Nav.Link>
              <Nav.Link href="#link">YEEZY</Nav.Link>
              <Nav.Link href="#link">ADDIDAS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
