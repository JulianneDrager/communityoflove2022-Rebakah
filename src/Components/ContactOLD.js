import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Form, Card } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactStyle from "./Contact.module.css";
import PhotoStyle from "./Photos.module.css";

const Contact = () => {
  const contactBottom = ContactStyle.contactBottom;
  const form = ContactStyle.form;
  const email = ContactStyle.email;
  const name = ContactStyle.name;
  const messageBottom = ContactStyle.messageBottom;
  const formStyleContact = ContactStyle.formStyleContact;
  const innerCardWrapper = PhotoStyle.innerCardWrapper;
  const btnBottom = ContactStyle.btnBottom;
  const footer = ContactStyle.footer;

  const navigate = useNavigate();
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bxdy7gj", //survice id for keeministries2023@gmail.com
        "contact-inquiry", //templete id
        // console.log("DATA",  refForm.current.name.value),
        refForm.current,
        "qsZBrxlTFSql2v3X2" //public key
      )
      .then(
        (result) => {
          //   alert("Message successfully sent!");
          navigate(`/tmp/jermainekee.com/thankyou-general/${refForm.current.name.value}`);
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
      <Card className={innerCardWrapper}>
        <Card.Body className={formStyleContact}>
          <Form
            id="contact"
            ref={refForm}
            onSubmit={sendEmail}
            className={form}
            autoComplete="on"
          >
            
            <Row>
              <Card.Title className={contactBottom}>Contact Us</Card.Title>
              <Form.Group as={Col} sm={12} md={6} controlId="formGridEmail">
                <Form.Control
                  className={email}
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control
                  className={name}
                  name="name"
                  type="name"
                  placeholder="Enter Name"
                  required
                />
              </Form.Group>
            </Row>

            <Form.Control
              className={messageBottom}
              as="textarea"
              name="message"
              type="text"
              rows={3}
              placeholder="Enter Message"
            />
            <Button variant="light" type="submit" value="send" className={btnBottom}>
              SUBMIT
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Card.Text className={footer}>
        © 2023 All Rights Reserved DesigninGlory.com{" "}
      </Card.Text>
    </>
  );
};
export default Contact;
