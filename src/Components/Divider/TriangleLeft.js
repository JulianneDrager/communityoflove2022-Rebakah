import React from "react";
import DividerStyle from "./DividerStyle.module.css";
import triShape from "../../images/mobile-divider/triangle.png";

const TriangleLeft = () => {
    const triangleLeft = DividerStyle.triangleLeft;
  return (
    <>

        <div style={{height:".1px"}}>
        <img className={triangleLeft} src={triShape} alt="triangle" />
        </div>
    </>
  );
};
export default TriangleLeft;
