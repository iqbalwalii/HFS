import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/Info.module.css";
const refund = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={{ offset: 3, span: 6 }} className={styles.refund}>
          <h2 className="text-center mb-4"> REFUND POLICY </h2>
          <ul>
            <h6>WHAT IS YOUR POLICY FOR ONLINE PURCHASES?</h6>
            <li>
              All sneakers must be returned in their original condition with the
              sneaker box and an outer box for protection purposes. Any returns
              sent back without an outer box may be refused and sent back to the
              customer if damaged.
            </li>
            <li>
              If your return is not accepted you will be liable to pay for a
              shipping label to have the item sent back to you.
            </li>
            <li>
              Any item purchased in a sale, or with a promotional code are only
              eligible for store credit.
            </li>
            <li>
              You have 14 days from the date your order was received to return
              this back to us.
            </li>
          </ul>
          <ul>
            <h6>ARE THERE ANY CHARGES FOR RETURNS?</h6>
            <li>
              Returns are free of charge within the UK by using DPD. We request
              any returns sent back from outside of the UK to be returned with
              tracked shipping to the following address:
            </li>
            <div>
              Unit 13
              <br />
              Kendal Way <br />
              Vision Industrial Park <br />
              Acton <br />
              London <br />
            </div>
          </ul>
          <ul>
            <h6>HOW SOON WILL I GET MY REFUND?</h6>
            <li>
              Once your return is received and inspected, we will send you an
              email to notify you that we have received your returned item. We
              will also notify you of the approval or rejection of your refund.
            </li>
            <li>
              If you are approved, your refund will be processed and a credit
              will automatically be applied to the original method of payment,
              within 10 working days.
            </li>
            <Link href="/return">
              <a>To Create a return Click Here</a>
            </Link>
          </ul>
          <ul>
            <h6>WHAT IS YOUR POLICY FOR IN STORE PURCHASES?</h6>
            <li>
              Any items purchased in store are only eligible for store credit or
              an exchange, and you have 14 days from the date of purchase to
              return these back to us.
            </li>
            <li>
              For clothing, returns must be unwashed and unworn. All returns
              must be brought back in original packaging, with all labels
              attached.
            </li>
            <li>
              All sneakers must be brought back in their original condition with
              their original sneaker box.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default refund;
