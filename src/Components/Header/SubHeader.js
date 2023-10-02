import React from "react";
import SubHeaderStyle from "./SubHeader.module.css";
import Wrapper from "../ui/Wrapper";

const ConferenceHeader = () => {
  const cardWrapper = SubHeaderStyle.cardWrapper;

  return (
    <>
    {/* wraps header image */}
      <Wrapper className={cardWrapper}></Wrapper>
    </>
  );
};
export default ConferenceHeader;
