import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Card } from "react-bootstrap";
import Name from "./Form Fields/Name";
import Email from "./Form Fields/Email";
import Phone from "./Form Fields/Phone";
import Message from "./Form Fields/Message";
import SubmitButton from "./Form Fields/SubmitButton";
import emailjs from "@emailjs/browser";
import PrayerContactStyle from "./PrayerContact.module.css";

const PrayerForm = () => {
  const contact = PrayerContactStyle.contact;
  const form = PrayerContactStyle.form;
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
        refForm.current,
        "KL1A_jO5VMRJh9xEy" //public key
      )
      .then(
        (result) => {
          navigate(`thankyou/${refForm.current.name.value}`);
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
        <Name />
        <Email />
        <Phone />
        <Message details={details} setDetails={setDetails} />
        <SubmitButton ffIsValid={ffIsValid} validated={validated} />
      </Form>
    </>
  );
};
export default PrayerForm;
