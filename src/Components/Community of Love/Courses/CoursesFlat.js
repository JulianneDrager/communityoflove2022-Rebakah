import React from "react";
import Spanish from "./Languages/Spanish";
import Swahili from "./Languages/Swahili";
import Italy from "./Languages/Italy";

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
