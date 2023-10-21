import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import PrayerContactStyle from "../PrayerContact.module.css";

const Phone = () => {
  const phoneNumberPhoto = PrayerContactStyle.phoneNumberPhoto;

  return (
    <>
      <Form.Label style={{ color: "white" }}>Your Phone Number*</Form.Label>
      <Form.Group as={Col} sm={12} controlId="formGridEmail">
        <InputGroup hasValidation>
          <Form.Control
            name="phone-number"
            type="tel"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            required
            className={phoneNumberPhoto}
          />
          <Form.Control.Feedback type="invalid" style={{ marginTop: "-.2rem" }}>
            Please enter a valid phone number format
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default Phone;
