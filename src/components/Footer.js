import React from "react";
import footer from "../styles/Footer.module.css";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import CountryDropdown from "country-dropdown-with-flags-for-react";
const Footer = () => {
  return (
    <Row className={footer.main}>
      <Col className={footer.logo}>
        <Image
          src="/assets/images/logo.png"
          alt="High Fashion Society"
          width="50px"
          height="20px"
        />
      </Col>
      <Col className={footer.section}>
        <h5>CUSTOMER SERVICE</h5>
        <ul>
          <li>
            <Link href="faq">
              <a>FAQ&apos;S</a>
            </Link>
          </li>
          <li>
            <Link href="privacy">
              <a>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href="refund">
              <a>Refund Policy</a>
            </Link>
          </li>
          <li>
            <Link href="contact">
              <a>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="terms">
              <a>Terms &amp; Conditions</a>
            </Link>
          </li>
          <li>
            <Link href="shipping">
              <a>Shipping Policy</a>
            </Link>
          </li>
          <li>
            <Link href="return">
              <a> Create Returns</a>
            </Link>
          </li>
          {/* <li>
            <Link href="faq">
              <a>Store Locations</a>
            </Link>
          </li> */}
        </ul>
      </Col>
      <Col className={footer.section}>
        <h5>INFORMATION</h5>
        <ul>
          <li>
            <Link href="profile">
              <a>My Account</a>
            </Link>
          </li>
          <li>
            <CountryDropdown
              id="UNIQUE_ID"
              className="YOUR_CSS_CLASS"
              preferredCountries={["gb", "us"]}
              value=""
              handleChange={(e) => console.log(e.target.value)}
            ></CountryDropdown>
          </li>
          <li>Blog</li>
          {/* <li>Careers</li> */}
          <li>Laybuy</li>
          <li>Klarna</li>
          <li>Reviews</li>
        </ul>
      </Col>
      <Col className={footer.section}>
        <h5>TOP COLLECTIONS</h5>
        <ul>
          <li>Nike Dunk</li>
          <li>Air jordan 1</li>
          <li>Fear of god</li>
          <li>Yeezy</li>
          <li>Air force 1</li>
          <li>OFF-White</li>
        </ul>
      </Col>
      <Col className={footer.section}>
        <h5>FOLLOW US</h5>
        <ul>
          <li>instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Youtube</li>
          <li>Dribbble</li>
          <li>Pinterest</li>
        </ul>
      </Col>
    </Row>
  );
};

export default Footer;
