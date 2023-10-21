import React from "react";
import DividerStyle from "./css/DividerStyle.module.css";
import triShape from "../../../images/mobile-divider/triangle-blue.png";

const DividerLeft = () => {
    const greenDividerLeft = DividerStyle.greenDividerLeft;
    const triangleLeftBlue = DividerStyle.triangleLeftBlue;
  return (
    <>

        <div className={greenDividerLeft}>
        <img className={triangleLeftBlue} src={triShape} alt="triangle" />
        </div>
    </>
  );
};
export default DividerLeft;
