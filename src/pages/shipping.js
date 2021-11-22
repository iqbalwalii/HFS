import React from "react";
import styles from "../styles/Info.module.css";
import { Container, Row, Col } from "react-bootstrap";
const shipping = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }} className={styles.shipping}>
          <h3 className="text-center my-3">SHIPPING POLICY</h3>
          <p>
            Please note your goods will only be shipped Monday-Friday. Shipping
            timing begins when you receive the shipping confirmation email.
          </p>
          <p>
            Please note that once your order is confirmed, we are unable to
            alter the delivery address or method, or any details within your
            order, such as product, number of products, size, colour.
          </p>
          <p>
            A signature will be required on delivery, someone else can sign for
            the package.
          </p>
          <p>
            If you are not home to receive the delivery, UPS or DPD will leave
            you a contact card to pick up the package in person from your
            nearest depot or access point.
          </p>
          <p>
            We cannot deliver to certain addresses such as student/campus
            accommodation, hotels, restaurants, stores, or forwarding addresses.
          </p>
          <p>
            Most of our international orders are shipped on a DDP (Delivery
            Duties Paid) basis. This means that taxes and duties will be added
            at the checkout accordingly, and the cost of this depends on the
            country you are based.
          </p>
          <p>
            The following countries are shipped to with Delivery Duties Paid:
          </p>
          <p>
            Australia, Bahrain, Bosnia &amp; Herzegovina, Canada, China,
            European Union, Hong Kong SAR China, Iceland, India, Indonesia, Isle
            of Man, Israel, Japan, Kuwait, Malaysia, Mexico, New Zealand,
            Norway, Philippines, Qatar, Russia, Saudi Arabia, Serbia, Singapore,
            South Africa, South Korea, Switzerland, Taiwan, Thailand, Turkey,
            Ukraine, United Arab Emirates, United States, Vietnam.
          </p>
          <p>
            Any other country or region outside the above list is subject to pay
            taxes &amp; duties set by their country upon delivery.
          </p>
          <p>
            Please note, these fees are the sole responsibility of the customer
            and are non-refundable, even if you return your order.
          </p>
          <h6>London Click and Collect</h6>
          <p>
            If you live locally to the Covent Garden area, you are welcome to
            pick up your package from our 4 James Street store. Please select
            the ‘Pick Up’ delivery method when checking out.
          </p>
          <p>
            To collect your order from a store, you will be required to show:
          </p>
          <p>
            Confirmation e-mail, Official photo ID (passport or driving license)
            and Payment card used for the order.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default shipping;
