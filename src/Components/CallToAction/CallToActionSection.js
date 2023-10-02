import React from "react";
import { Card, Button } from "react-bootstrap";
import BarborImg from "../../images/barbare.jpeg";
import HeaderStyle from "../Header/Header.module.css";

const ConferenceIntro = () => {
  const btnConference = HeaderStyle.btnConference;
  const divider4 = HeaderStyle.divider4;
  const regWrapper = HeaderStyle.regWrapper;
  const regBody = HeaderStyle.regBody;
  const confTitle = HeaderStyle.confTitle;
  return (
    <>
      <div className={divider4}></div>
      <Card style={{ marginTop: "-2rem" }}>
        <Card.Img variant="top" src={BarborImg} />
        <Card.Body className={regBody}>
          <Card.Title className={confTitle}>LIVE 2023 CONFERENCE</Card.Title>
          <div className={regWrapper}>
            $35 Registration will cover Saturday seminar and breakfast
            <hr style={{ margin: ".5rem" }} />
            Inclusive of all weekly seminars
          </div>
          <Button
            href="/tmp/jermainekee.com/conference"
            className={btnConference}
          >
            VIEW EVENT
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default ConferenceIntro;
