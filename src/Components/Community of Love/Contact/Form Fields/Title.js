import React from "react";
import { Row, Card } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";

const Title = () => {
  const contactTitle = ContactStyle.contactTitle;

  return (
    <>
      <Row>
        <Card.Title className={contactTitle}>
          Connect with the Community
        </Card.Title>
        <Card.Text style={{ color: "white" }}>
          Please let us know what is on your heart
        </Card.Text>
      </Row>
    </>
  );
};
export default Title;
