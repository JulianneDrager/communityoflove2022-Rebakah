import React from "react";
import { Container } from "react-bootstrap";
import NavCafe from "./ui/NavCafe";
import Story from "./Gods Gospel Cafe/OurStory/Story";
import Board from "./Gods Gospel Cafe/Board Directors/BoardDirector";
import FaithAction from "./Gods Gospel Cafe/Faith Action/FaithAction";
import Header from "./Gods Gospel Cafe/Header/Header";
import Contact from "./Gods Gospel Cafe/Contact/Contact";
// import Divider from "./Gods Gospel Cafe/Divider/Divider"

const CafeScreen = () => {
  return (
    <>
      <Container className="p-0">
        <NavCafe />
        <Header />
        <Story />
        <Board />
        <FaithAction />
        <Contact />
      </Container>
    </>
  );
};
export default CafeScreen;
