import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const about = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h3>About us</h3>
          <p>
            Bringing the luxury lifestyle to a fashionable society. We are a
            member of explosive drip. Our goal is to bring high fashion to a
            high class society. High style fashion, Expensive lifestyle,
            Exclusive sneakers and Designer brands. The list is endless.
          </p>
        </Col>
      </Row>
      <Accordion defaultActiveKey="0" color="dark" bg="dark">
        <Accordion.Item eventKey="0">
          <Accordion.Header>About Us</Accordion.Header>
          <Accordion.Body>
            Bringing the luxury lifestyle to a fashionable society. We are a
            member of explosive drip. Our goal is to bring high fashion to a
            high class society. High style fashion, Expensive lifestyle,
            Exclusive sneakers and Designer brands. The list is endless.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Privacy policy</Accordion.Header>
          <Accordion.Body>
            We, at Liberty Shoes have been fashioning footwear for well over 50
            years for the style- conscious people around the globe. Currently
            with an annual turnover exceeding INR.600 crore (U.S. $150 million),
            we figure amongst the top 5 manufacturers of leather footwear of the
            world producing more than 50,000 pairs a day using a capacity of
            more than 3 lakh square feet of leather per month. Helping us dress
            up the feet of the fashion-driven and quality-seeking customers in
            more than 25 countries, which includes major international fashion
            destinations like France, Italy and Germany, is our worldwide
            distribution network of 150 distributors, 400 exclusive showrooms
            and more than 6000 multi-brand outlets. Our commitment to quality is
            also evidenced by our ISO 9001: 2000 certification. 1954 - A small
            shop manufacturing 4 pairs a day. 1964 - Brand Liberty was born.
            With our first export order we geared up to excite the global
            footwear market. 1982 - With our first factory Liberty brought world
            class products to domestic market. 1995 - With 10 sub brands serving
            all kinds of consumers, Liberty became the favorite Indian footwear
            brand. 2003 - With a consumer centric strategy, Liberty started
            serving customers. 2010 - Revolutionized our supply chain for
            excellent manufacturing strength. 2014 - Moving with a vision to be
            a Rs. 1,000 Crore Company.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Our Mission</Accordion.Header>
          <Accordion.Body>
            We, at Liberty Shoes have been fashioning footwear for well over 50
            years for the style- conscious people around the globe. Currently
            with an annual turnover exceeding INR.600 crore (U.S. $150 million),
            we figure amongst the top 5 manufacturers of leather footwear of the
            world producing more than 50,000 pairs a day using a capacity of
            more than 3 lakh square feet of leather per month. Helping us dress
            up the feet of the fashion-driven and quality-seeking customers in
            more than 25 countries, which includes major international fashion
            destinations like France, Italy and Germany, is our worldwide
            distribution network of 150 distributors, 400 exclusive showrooms
            and more than 6000 multi-brand outlets. Our commitment to quality is
            also evidenced by our ISO 9001: 2000 certification. 1954 - A small
            shop manufacturing 4 pairs a day. 1964 - Brand Liberty was born.
            With our first export order we geared up to excite the global
            footwear market. 1982 - With our first factory Liberty brought world
            class products to domestic market. 1995 - With 10 sub brands serving
            all kinds of consumers, Liberty became the favorite Indian footwear
            brand. 2003 - With a consumer centric strategy, Liberty started
            serving customers. 2010 - Revolutionized our supply chain for
            excellent manufacturing strength. 2014 - Moving with a vision to be
            a Rs. 1,000 Crore Company.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Return Policy</Accordion.Header>
          <Accordion.Body>
            We, at Liberty Shoes have been fashioning footwear for well over 50
            years for the style- conscious people around the globe. Currently
            with an annual turnover exceeding INR.600 crore (U.S. $150 million),
            we figure amongst the top 5 manufacturers of leather footwear of the
            world producing more than 50,000 pairs a day using a capacity of
            more than 3 lakh square feet of leather per month. Helping us dress
            up the feet of the fashion-driven and quality-seeking customers in
            more than 25 countries, which includes major international fashion
            destinations like France, Italy and Germany, is our worldwide
            distribution network of 150 distributors, 400 exclusive showrooms
            and more than 6000 multi-brand outlets. Our commitment to quality is
            also evidenced by our ISO 9001: 2000 certification. 1954 - A small
            shop manufacturing 4 pairs a day. 1964 - Brand Liberty was born.
            With our first export order we geared up to excite the global
            footwear market. 1982 - With our first factory Liberty brought world
            class products to domestic market. 1995 - With 10 sub brands serving
            all kinds of consumers, Liberty became the favorite Indian footwear
            brand. 2003 - With a consumer centric strategy, Liberty started
            serving customers. 2010 - Revolutionized our supply chain for
            excellent manufacturing strength. 2014 - Moving with a vision to be
            a Rs. 1,000 Crore Company.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default about;
