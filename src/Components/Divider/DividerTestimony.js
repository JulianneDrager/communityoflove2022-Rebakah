import React from "react";
import DividerStyle from "./DividerStyle.module.css";
import triShape from "../../images/mobile-divider/triangle.png";

const DividerTestimony = () => {
    const greenDividerTestimony = DividerStyle.greenDividerTestimony;
    const triangle = DividerStyle.triangle;
  return (
    <>

        <div className={greenDividerTestimony}>
        <img className={triangle} src={triShape} alt="triangle" />
        </div>
    </>
  );
};
export default DividerTestimony;
