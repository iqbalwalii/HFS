import React from "react";
import { Accordion, Container } from "react-bootstrap";
import styles from "../styles/Info.module.css";
import Link from "next/link";
const faq = () => {
  return (
    <Container className={styles.top}>
      <h2 className="text-center">FAQ&apos;s</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            How do I create an account on Kick Game?
          </Accordion.Header>
          <Accordion.Body>
            You can click{" "}
            <Link href="/signup">
              <a style={{ color: "00f" }}>here</a>
            </Link>{" "}
            to create and personalise your account. You’ll be the first to know
            about sales, new releases and top picks in your size.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Can I change my shipping address?</Accordion.Header>
          <Accordion.Body>
            You may contact us to amend your shipping address within half an
            hour of placing your order, and we will do our best to accommodate
            this.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Do you ship to my country?</Accordion.Header>
          <Accordion.Body>
            We offer worldwide delivery via DPD and UPS, just simply enter your
            full delivery address when checking out.
            <br />
            <br /> Most* of our international orders are shipped on a DDP
            (Delivery Duties Paid) basis. This means taxes and duties will be
            added at the checkout accordingly, and the cost depends on the
            country you are based.
            <br />
            <br /> Shipping on a DDP basis means there will be no surprises or
            additional costs from the courier when your order is delivered.
            <br />
            <br />
            Please note, all taxes and duties are non-refundable, even if you
            return your order. <br />
            <br />
            *You can click here for the full list of countries we ship to on a
            DDP basis
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Tax &amp; Import Duty</Accordion.Header>
          <Accordion.Body>
            Most of our international orders are shipped on a DDP (Delivery
            Duties Paid) basis. This means that taxes and duties will be added
            at the checkout accordingly, and the cost of this depends on the
            country you are based.
            <br />
            <br />
            The following countries are shipped to with Delivery Duties Paid:
            <br />
            <br />
            Australia, Bahrain, Bosnia &amp; Herzegovina, Canada, China,
            European Union, Hong Kong SAR China, Iceland, India, Indonesia, Isle
            of Man, Israel, Japan, Kuwait, Malaysia, Mexico, New Zealand,
            Norway, Philippines, Qatar, Russia, Saudi Arabia, Serbia, Singapore,
            South Africa, South Korea, Switzerland, Taiwan, Thailand, Turkey,
            Ukraine, United Arab Emirates, United States, Vietnam.
            <br />
            Any other country or region outside the above list is subject to pay
            taxes &amp; duties set by their country upon delivery.
            <br />
            Please note, these fees are the sole responsibility of the customer
            and are non-refundable, even if you return your order.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Who will deliver my item?</Accordion.Header>
          <Accordion.Body>
            Orders delivered to the UK &amp; Europe will be shipped via DPD, and
            orders delivered internationally will be shipped via UPS. All
            shipments are sent on a signed for delivery service only.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>What are Your Shipping Options</Accordion.Header>
          <Accordion.Body>
            We offer two main shipping options within the UK: Standard and
            Express.
            <br />
            <p>
              <strong>Express Shipping</strong>
              <br /> We aim for delivery within 1-2 business days after your
              order has been accepted. Your order will be eligible for Express
              Shipping if it has been placed before 14:00 (GMT) on
              Monday-Thursday. If placed after this time, we will aim to
              dispatch your order for delivery on the following business day,
              which excludes weekends.
            </p>
            <br />
            <strong>Standard Shipping</strong>
            <br /> We aim for delivery within 3-5 business days after your order
            has been accepted, excluding weekends.
            <br />
            All shipping options are fully tracked, and we will send your
            tracking information via email once your order has dispatched. If
            you placed an order for multiple items, these may be shipped in
            separate parcels. If applicable, you will receive a tracking number
            for each parcel.
            <br /> If you provided a valid mobile number when placing your
            order, our delivery partner may also send you delivery notifications
            by SMS.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default faq;
