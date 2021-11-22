import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CurrencyBitcoin, Paypal } from "react-bootstrap-icons";
const pay = () => {
  return (
    <Container>
      <div className="flex">
        <Button variant="dark" size="lg">
          <CurrencyBitcoin size={28} />
          PAY WITH BITCOIN
        </Button>
        <Button variant="primary" size="lg">
          <CurrencyBitcoin size={28} />
          PAY WITH PayPal
        </Button>
      </div>
    </Container>
  );
};

export default pay;
