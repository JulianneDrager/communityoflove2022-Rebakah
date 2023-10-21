import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";

const Message = () => {
  const labelForm = ContactStyle.labelForm;
  const message = ContactStyle.message;
  return (
    <>
      <Form.Label className={labelForm}>Reason for Connecting</Form.Label>

      <Form.Control
        className={message}
        as="textarea"
        name="message"
        type="text"
        rows={3}
        placeholder="Write your response here"
      />
    </>
  );
};
export default Message;
