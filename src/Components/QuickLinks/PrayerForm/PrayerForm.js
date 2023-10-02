import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Button, Form, Card, InputGroup } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import PrayerContactStyle from "./PrayerContact.module.css";

const PrayerForm = () => {
  const contact = PrayerContactStyle.contact;
  const form = PrayerContactStyle.form;
  const emailPhoto = PrayerContactStyle.emailPhoto;
  const namePhoto = PrayerContactStyle.namePhoto;
  const phoneNumberPhoto = PrayerContactStyle.phoneNumberPhoto;
  const btn = PrayerContactStyle.btn;
  const contactTitle = PrayerContactStyle.contactTitle;

  //send email
  const navigate = useNavigate();
  const refForm = useRef();

  const [ffIsValid, setFfIsValid] = useState(false);
  const [details, setDetails] = useState("");
  const [validated, setValidated] = useState(false);

  // check if string is empty
  const checkString = () => {

    if (details.length > 2) {
      // console.log("empty");
      setFfIsValid(true);
      setValidated(false);
    }
  };

  // email.js to send data to client
  const sendEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();

    emailjs
      .sendForm(
        "service_vot1p6c", //service id
        "photo-inqury", //template id
        // console.log("DATA",  refForm.current.name.value),
        refForm.current,
        "KL1A_jO5VMRJh9xEy" //public key
      )
      .then(
        (result) => {
          // alert("Message successfully sent!");
          navigate(
            // `/tmp/emilescreations.com/thankyou/${refForm.current.name.value}`
            `thankyou/${refForm.current.name.value}`
          );
          window.location.reload(false);
          console.log("result", result);
        },
        (error) => {
          alert("Failed to send the message, please try again");
          console.log(error.text);
        }
      );
  };

  const validateOnChange = (e) => {
    checkString();

    //fires error messages only - doesn't prevent submit!
    const ckName = e.currentTarget;

    console.log("test", e.currentTarget);
    if (ckName.checkValidity() === false) {
    }
    setValidated(true);
  };

  return (
    <>
          <div className={contact}></div>
          <Card.Title className={contactTitle}>Prayer Request</Card.Title>
          <Form
            id="contact"
            ref={refForm}
            className={form}
            autoComplete="on"
            noValidate
            validated={validated}
            onSubmit={sendEmail}
            onChange={validateOnChange}
          >
            <Form.Label style={{color:"white"}}>Full Name*</Form.Label>
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

                <Form.Control.Feedback
                  type="invalid"
                  style={{ marginTop: "-.2rem" }}
                >
                  Full name required
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Label style={{color:"white"}}>Email Address*</Form.Label>
            <Form.Group as={Col} sm={12} controlId="formGridEmail">
              <InputGroup hasValidation>
                <Form.Control
                  className={emailPhoto}
                  name="email"
                  type="email"
                  required
                />
                <Form.Control.Feedback
                  type="invalid"
                  style={{ marginTop: "-.2rem" }}
                >
                  Please enter a valid email format
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Label style={{color:"white"}}>Your Phone Number*</Form.Label>
            <Form.Group as={Col} sm={12} controlId="formGridEmail">
              <InputGroup hasValidation>
                <Form.Control
                  name="phone-number"
                  type="tel"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  required
                  className={phoneNumberPhoto}
                />
                <Form.Control.Feedback
                  type="invalid"
                  style={{ marginTop: "-.2rem" }}
                >
                  Please enter a valid phone number format
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Label style={{ margin: "1rem 0 -1rem 0", color:"white" }}>
              Please write your prayer request below
            </Form.Label>
            
            <Form.Group as={Col}>
              <InputGroup hasValidation>
                <Form.Control
                  as="textarea"
                  style={{borderRadius:"0"}}
                  name="photography-message"
                  type="text"
                  rows={3}
                  minLength={10}
                  required
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
                <Form.Control.Feedback
                  type="invalid"
                  style={{ marginTop: "-1rem" }}
                >
                  Please provide more details
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
           
            {ffIsValid && validated ? (
              <Button variant="light" type="submit" className={btn}>
                SUBMIT
              </Button>
            ) : (
              <Button
                disabled={true}
                variant="light"
                type="submit"
                className={btn}
              >
                SUBMIT
              </Button>
            )}
          </Form>
    </>
  );
};
export default PrayerForm;
