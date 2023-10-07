import { useNavigate } from "react-router-dom";
import { Form, Card, Row, Button, InputGroup, Col } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactStyle from "./Contact.module.css";
import DividerTestimony from "../Divider/DividerTestimony";
import FooterScreen from "../Footer/FooterScreen";

const Contact = () => {
  const contactTitle = ContactStyle.contactTitle;
  const form = ContactStyle.form;
  const labelForm = ContactStyle.labelForm;
  const message = ContactStyle.message;
  const formStyle = ContactStyle.formStyle;
  const btn = ContactStyle.btn;

  const navigate = useNavigate();
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xoxtfpl", //survice id
        "live-conference-order", //templete id
        // console.log("DATA",  refForm.current.name.value),
        refForm.current,
        "pwgvN6dm650vWjxRr" //public key
      )
      .then(
        (result) => {
          //   alert("Message successfully sent!");
          navigate(
            `/tmp/jermainekee.com/thankyou/${refForm.current.name.value}`
          );
          // window.location.reload(false);
          console.log("result", result);
        },
        (error) => {
          alert("Failed to send the message, please try again");
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div style={{ marginTop: "1.5rem" }}>
        <DividerTestimony />
      </div>
      <Card>
        <Card.Body className={formStyle}>
          <Form
            id="contact"
            ref={refForm}
            onSubmit={sendEmail}
            className={form}
            autoComplete="on"
          >
            <Row>
              <Card.Title className={contactTitle}>
                Connect with the Community
              </Card.Title>
              <Card.Text style={{ color: "white" }}>
                Please let us know what is on your heart 
              </Card.Text>
            </Row>

            <Form.Label className={labelForm}>Name</Form.Label>
            <Form.Group as={Col}>
              <InputGroup hasValidation>
                <Form.Control
                  id="name"
                  className={message}
                  name="name"
                  type="text"
                  required
                  minLength={3}
                  maxLength={20}
                />
                <Form.Control.Feedback
                  style={{ marginTop: "-.9rem" }}
                  type="invalid"
                >
                  Full name required
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Label className={labelForm}>Phone Number</Form.Label>
            <Form.Group as={Col} sm={12}>
              <InputGroup hasValidation>
                <Form.Control
                  className={message}
                  name="phone-number"
                  type="tel"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  required
                />
                <Form.Control.Feedback
                  style={{ marginTop: "-.9rem" }}
                  type="invalid"
                >
                  Please enter a valid phone number format
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Label className={labelForm}>Reason for Connecting</Form.Label>

            <Form.Control
              className={message}
              as="textarea"
              name="message"
              type="text"
              rows={3}
              placeholder="Write your response here"
            />
            <div style={{textAlign:"left"}}>
              <Button
                variant="light"
                type="submit"
                value="send"
                className={btn}
              >
                SUBMIT
              </Button>
            </div>
          </Form>
        </Card.Body>
        <FooterScreen/>
      </Card>
    </>
  );
};
export default Contact;
