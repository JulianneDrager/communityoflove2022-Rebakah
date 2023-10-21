import React from "react";
import { Button } from "react-bootstrap";
import PrayerContactStyle from "../PrayerContact.module.css";

const SubmitButton = ({ ffIsValid, validated }) => {
  const btn = PrayerContactStyle.btn;

  return (
    <>
      {ffIsValid && validated ? (
        <Button variant="light" type="submit" className={btn}>
          SUBMIT
        </Button>
      ) : (
        <Button disabled={true} variant="light" type="submit" className={btn}>
          SUBMIT
        </Button>
      )}
    </>
  );
};
export default SubmitButton;
