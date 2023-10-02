import React from "react";
import DividerStyle from "./DividerStyle.module.css";
import triShape from "../../images/mobile-divider/triangle-blue.png";

const DividerRight = () => {
    const greenDividerRight = DividerStyle.greenDividerRight;
    const triangleRightBlue = DividerStyle.triangleRightBlue;
  return (
    <>

        <div className={greenDividerRight}>
        <img className={triangleRightBlue} src={triShape} alt="triangle" />
        </div>
    </>
  );
};
export default DividerRight;
