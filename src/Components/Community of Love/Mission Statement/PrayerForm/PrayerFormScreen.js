import React from "react";
import { Container } from "react-bootstrap";
import PrayerForm from "./PrayerForm";
import Footer from "../../../Footer/Footer";
import Nav from "../../../ui/Nav"

const PrayerFormScreen = () => {
  return (
    <>
      <Container className="p-0">
        <Nav />
        <PrayerForm />
        <Footer />
      </Container>
    </>
  );
};
export default PrayerFormScreen;
