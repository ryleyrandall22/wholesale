import React, { useState, useEffect } from "react";
import Couple from "../Assets/couple.JPG";
export default function Intro() {
  const [size, setSize] = useState("reg");

  const styles = {
    reg: {
      titleSize: 72,
      bodySize: 32
    },
    mobile: {
      titleSize: 58,
      bodySize: 24
    }
  };

  const updateSize = x => {
    if (window.innerWidth < 420) {
      setSize("mobile");
    } else {
      setSize("reg");
    }
  };
  useEffect(() => {
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
      }}
    >
      <div
        style={{
          flexBasis: "50%",
          flex: 1,
          width: "100%",
          minWidth: "370px",
          padding: 10,
          backgroundColor: "#E0E0E0"
        }}
      >
        <div
          style={{ fontFamily: "Pacifico", fontSize: styles[size].titleSize }}
        >
          About Me
        </div>
        <div
          style={{
            fontFamily: "Montserrat Alternates, sans-serif",
            fontSize: styles[size].bodySize
          }}
        >
          Born and raised in Mesa, Arizona
          <br />
          <br />
          I grew up loving sports, technology, and german pancakes
          <br />
          <br />
          After High School served a mission for the Church of Jesus Christ of
          Latter-day Saints in West Africa for two years
          <br />
          <br />
          Soon after getting home, I met the love of my life and got married in
          the Newport Beach, California
        </div>
      </div>
      <div
        style={{
          flexBasis: "50%",
          flex: 1,
          width: "100%",
          minWidth: "370px",
          minHeight: 400,
          backgroundColor: "#E0E0E0",
          backgroundImage: `url(${Couple})`,
          backgroundSize: "100%"
        }}
      />
    </div>
  );
}
