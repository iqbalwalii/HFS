import React, { useState, useEffect } from "react";
import footer from "../styles/Footer.module.css";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
// import ReactFlagsSelect from "react-flags-select";
const Footer = () => {
  // const [selected, setSelected] = useState("US");
  // useEffect(() => {
  //   try {
  //     fetch(
  //       "https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708",
  //       {
  //         method: "GET",
  //         headers: {
  //           Accept: "application/json",
  //         },
  //       }
  //     )
  //       .then((res) => res.json())
  //       .then((response) => {
  //         if (response.country_name) {
  //           setCountry(response.country_name);
  //           setCode(response.country_code);
  //           console.log("geo respoinse ");
  //           // console.log(
  //           // 	'after check if country from fetch, ',
  //           // 	response.country_name
  //           // );
  //           // const country = response.country_name;
  //         }
  //       })
  //       .catch((err) => {
  //         console.log("geolocation Request failed", err);
  //       });
  //   } catch (err) {
  //     console.log("outter geolocation trycatch", err);
  //   }
  // }, []);

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
          <li></li>
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
          {/* <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => setSelected(code)}
            // placeholder={country}
            // className={Navstyle.location}
          /> */}
        </ul>
      </Col>
    </Row>
  );
};

export default Footer;
