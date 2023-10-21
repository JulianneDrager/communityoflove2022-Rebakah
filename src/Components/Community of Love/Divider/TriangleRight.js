import React from "react";
import DividerStyle from "./css/DividerStyle.module.css";
import triShape from "../../../images/mobile-divider/triangle.png";

const TriangleRight = () => {
  const clearDivider = DividerStyle.clearDivider;
    const triangleRight = DividerStyle.triangleRight;
  return (
    <>

        <div className={clearDivider}>
        <img className={triangleRight} src={triShape} alt="triangle" />
        </div>
    </>
  );
};
export default TriangleRight;
