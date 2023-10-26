import { useNavigate } from "react-router-dom";
import { Form, Card } from "react-bootstrap";
import { useRef } from "react";
import Title from "./Form Fields/Title";
import Name from "./Form Fields/Name";
import Phone from "./Form Fields/Phone";
import Message from "./Form Fields/Message";
import SubmitButton from "./Form Fields/SubmitButton";
import DividerTestimony from "../Divider/DividerTestimony";
import FooterScreen from "../../Footer/FooterScreen";
import ContactStyle from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = ContactStyle.form;
  const formStyle = ContactStyle.formStyle;

  const navigate = useNavigate();
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xoxtfpl", //service id
        "live-conference-order", //template id
        // console.log("DATA",  refForm.current.name.value),
        refForm.current,
        "pwgvN6dm650vWjxRr" //public key
      )
      .then(
        (result) => {
          //   alert("Message successfully sent!");
          navigate(
            `/tmp/communityoflove2022/thankyou/${refForm.current.name.value}`
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
            <Title />
            <Name />
            <Phone />
            <Message />
            <SubmitButton />
          </Form>
        </Card.Body>
        <FooterScreen />
      </Card>
    </>
  );
};
export default Contact;
