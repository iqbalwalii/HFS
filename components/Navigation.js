import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Image from "next/image";
import Navstyle from "../styles/Navbar.module.css";
import Link from "next/link";
import { Bag, Person, Search } from "react-bootstrap-icons";
const Navigation = () => {
  return (
    <div className={Navstyle.nav}>
      <Navbar bg="light" expand="xxl">
        <Container>
          <div className="">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className={Navstyle.ham}
            />
            <Search size={32} style={{ paddingLeft: ".6rem" }} />
          </div>
          <Navbar.Brand href="#home" className={Navstyle.brand}>
            <Image
              src="/assets/images/logo.png"
              alt="High Fashion Society"
              width="100px"
              height="40px"
            />
            {/* <img
              src="./assets/images/logo.png"
              style={{ width: "80px", marginRight: ".2rem" }}
            /> */}
          </Navbar.Brand>
          <div className={Navstyle.links}>
            <Link href="/profile">
              <a>
                <Person size={36} style={{ paddingRight: ".3rem" }} />
              </a>
            </Link>
            <Link href="/cart">
              <a>
                <Bag size={30} style={{ paddingRight: ".3rem" }} />
              </a>
            </Link>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={Navstyle.navBottom}>
              <Nav.Link href="#home">NEW ARRIVALS</Nav.Link>
              <Nav.Link href="#link">BEST SELLERS</Nav.Link>
              <Nav.Link href="#link">AIR JORDANS</Nav.Link>
              <Nav.Link href="#link">NIKE</Nav.Link>
              <Nav.Link href="#link">YEEZY</Nav.Link>
              <Nav.Link href="#link">KIDS TRAINERS</Nav.Link>
              <Nav.Link href="#link">OFF WHITE</Nav.Link>
              <Nav.Link href="#link">NEW BALANCE</Nav.Link>
              {/* <Nav.Link href="#link">KID TRAINERS</Nav.Link> */}
              {/* <Nav.Link href="#link">SHOE CARE</Nav.Link> */}
              <Nav.Link href="#link">CLOTHING</Nav.Link>
              <Nav.Link href="#link">WOMEN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
