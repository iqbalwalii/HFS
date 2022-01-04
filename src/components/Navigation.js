import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Image from "next/image";
import Axios from "../utils/axios";
import Navstyle from "../styles/Navbar.module.css";
import Link from "next/link";
import { connect } from "react-redux";
import { Bag, Person, Search, XLg } from "react-bootstrap-icons";
import ACTIONS from "../utils/store/actions";
import { useRouter } from "next//router";
const Navigation = (props) => {
  const router = useRouter();
  console.log("props", props);
  const [page, setPage] = useState("");
  const [box, setBox] = useState(false);

  const onSearchHandler = (e) => {
    console.log("value", e.target.value);
    if (e.key === "Enter") {
      router.push({ pathname: "/shop", query: { searchTerm: e.target.value } });
    }
  };

  return (
    <div className={Navstyle.nav}>
      {/* {console.log(term)} */}
      <Navbar bg="light" expand="xxxl" fixed="top">
        <Container>
          <div className="">
            <Navbar.Toggle
              aria-controls="basic-navb ar-nav"
              className={Navstyle.ham}
            />
            {box === true ? (
              <XLg
                onClick={() => setBox(false)}
                size={32}
                style={{ paddingLeft: ".6rem" }}
              />
            ) : (
              <Search
                onClick={() => setBox(true)}
                size={32}
                style={{ paddingLeft: ".6rem" }}
              />
            )}
          </div>
          {box === true ? (
            <Form className={Navstyle.search}>
              <InputGroup size="sm" className="mt-1">
                <FormControl
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Search HFS"
                  onKeyDown={onSearchHandler}
                />
              </InputGroup>
            </Form>
          ) : (
            <Navbar.Brand href="/" className={Navstyle.brand}>
              <Image
                src="/assets/images/logo.png"
                alt="High Fashion Society"
                width="100px"
                height="40px"
              />
            </Navbar.Brand>
          )}

          <div className={Navstyle.links}>
            <Link href="/auth">
              <a>
                <Person size={36} style={{ paddingRight: ".3rem" }} />
              </a>
            </Link>
            <Link href="/cart">
              <a>
                <Bag size={30} style={{ paddingRight: ".3rem" }} />
                {/* {props.cart.length || ""} */}
              </a>
            </Link>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={Navstyle.navBottom}>
              <Nav.Link href="/">NEW ARRIVALS</Nav.Link>
              <Nav.Link href="#link">BEST SELLERS</Nav.Link>
              <Nav.Link value="Jordan" href="/jordans">
                AIR JORDANS
              </Nav.Link>
              <Nav.Link href="/nike">NIKE</Nav.Link>
              <Nav.Link href="/yeezy">YEEZY</Nav.Link>
              <Nav.Link href="/Kids">KIDS TRAINERS</Nav.Link>
              <Nav.Link href="/off-white">OFF WHITE</Nav.Link>
              <Nav.Link href="/new-balance">NEW BALANCE</Nav.Link>
              <Nav.Link href="/clothing">CLOTHING</Nav.Link>
              <Nav.Link href="/women">WOMEN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
