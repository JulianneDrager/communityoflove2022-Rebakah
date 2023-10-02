import React from "react";
import { Row, Col, Button } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import QuickLinksStyle from "./QuickLinksStyle.module.css";
import DividerLeft from "../Divider/DividerLeft"

const QuickLinks = () => {
  const rowStyle = QuickLinksStyle.rowStyle;
  const btn = QuickLinksStyle.btn;
  const btnNeedPrayer = QuickLinksStyle.btnNeedPrayer;
  const btnWrapper = QuickLinksStyle.btnWrapper;
  const h1Title = QuickLinksStyle.h1Title;
  const pStyle = QuickLinksStyle.pStyle
  return (
    <>
    <DividerLeft/>
      <Row id="quick-links" className={rowStyle}>
        <Col md={6}>
          <h1 className={h1Title}>Quick Links</h1>
          <p className={pStyle}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est velit esse cillum dolore occaecat cupidatat non proident.
          </p>
        </Col>
        <Col  md={6}>
          <div className={btnWrapper}>
            <Button href="/tmp/communityoflove2022.com/prayer"className={btnNeedPrayer}>NEED PRAYER</Button>
            <Button className={btn}>GIVE</Button>
            <Button className={btn}>PARTNER</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default QuickLinks;
