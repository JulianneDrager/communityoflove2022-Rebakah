import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";

const Message = ({details, setDetails}) => {

  return (
    <>
      <Form.Label style={{ margin: "1rem 0 -1rem 0", color: "white" }}>
        Please write your prayer request below
      </Form.Label>

      <Form.Group as={Col}>
        <InputGroup hasValidation>
          <Form.Control
            as="textarea"
            style={{ borderRadius: "0" }}
            name="photography-message"
            type="text"
            rows={3}
            minLength={10}
            required
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <Form.Control.Feedback type="invalid" style={{ marginTop: "-1rem" }}>
            Please provide more details
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default Message;
