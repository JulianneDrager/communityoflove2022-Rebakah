import React from "react";
import ThankYouStyle from "./ThankYouTest.module.css";

const Thankyou = () => {
  const h1Style = ThankYouStyle.h1Style;
  const pStyle = ThankYouStyle.pStyle;

  return (
    <>
      <h1 className={h1Style}>TEST</h1>

      <p className={pStyle}>This is a paragraph!</p>
    </>
  );
};
export default Thankyou;
