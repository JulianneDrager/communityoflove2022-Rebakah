import React from "react";
import Spanish from "./Spanish";
import Swahili from "./Swahili";
import Italy from "./Italy";

const CoursesFlat = () => {

  return (
<>
    <div style={{display:"flex"}}>
      <div><Spanish/></div>
      <div><Swahili/></div>
      <div><Italy/></div>
    </div>
</>
  );
};
export default CoursesFlat;
