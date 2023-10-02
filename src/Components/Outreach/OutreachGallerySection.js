import React from "react";
import { Button } from "react-bootstrap";
import Gallery from "./Gallery";
import StoreStyle from "./Store.module.css";

const OutreachGallerySection = () => {
  const calenderButton = StoreStyle.calenderButton;
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#ad7eae",
        }}
      >
        <Gallery />
        <Button
          href="/tmp/jermainekee.com/online-store"
          className={calenderButton}
          style={{ margin: "-1rem 0 1rem 0" }}
        >
          BUY COURSES{" "}
        </Button>
      </div>
    </>
  );
};
export default OutreachGallerySection;
