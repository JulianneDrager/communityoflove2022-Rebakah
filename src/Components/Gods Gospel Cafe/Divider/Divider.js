import React from "react";
import DividerStyle from "./css/DividerStyle.module.css";

const Divider = () => {
    const divider = DividerStyle.divider;
  return (
    <>
        <div className={divider}></div>
    </>
  );
};
export default Divider;
