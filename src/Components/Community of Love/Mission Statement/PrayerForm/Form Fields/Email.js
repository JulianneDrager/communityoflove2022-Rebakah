import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import PrayerContactStyle from "../PrayerContact.module.css";

const Email = () => {
  const emailPhoto = PrayerContactStyle.emailPhoto;

  return (
    <>
      <Form.Label style={{ color: "white" }}>Email Address*</Form.Label>
      <Form.Group as={Col} sm={12} controlId="formGridEmail">
        <InputGroup hasValidation>
          <Form.Control
            className={emailPhoto}
            name="email"
            type="email"
            required
          />
          <Form.Control.Feedback type="invalid" style={{ marginTop: "-.2rem" }}>
            Please enter a valid email format
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default Email;
