import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import PrayerContactStyle from "../PrayerContact.module.css";

const Name = () => {
  const namePhoto = PrayerContactStyle.namePhoto;

  return (
    <>
      <Form.Label style={{ color: "white" }}>Full Name*</Form.Label>
      <Form.Group as={Col} controlId="formGridName">
        <InputGroup hasValidation>
          <Form.Control
            className={namePhoto}
            name="name"
            type="text"
            required
            minLength={3}
            maxLength={20}
          />

          <Form.Control.Feedback type="invalid" style={{ marginTop: "-.2rem" }}>
            Full name required
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default Name;
