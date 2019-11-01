import React, { useState, useEffect } from "react";
import Blob from "../Assets/Blob.png";
import Blocks from "../Assets/Blocks.png";
import Frame from "../Assets/frame.png";
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
        height: "100%",
        width: "100%",
        backgroundColor: "#FFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
      }}
    >
      <img
        alt={"Blob"}
        style={{
          zIndex: 20,
          transform: "rotate(60deg)",
          width: 300,
          position: "absolute",
          top: -150,
          left: -80
        }}
        src={Blob}
      />
      {/* <img
        alt={"Blob"}
        style={{
          zIndex: 20,
          width: 600,
          position: "absolute",
          bottom: 0,
          right: 0
        }}
        src={Blocks}
      /> */}
      <div
        style={{
          width: "100%",
          maxWidth: 900,
          height: "100%",
          paddingTop: 100,
          paddingLeft: 80,
          paddingBottom: 200
        }}
      >
        <div
          style={{
            fontSize: styles[size].titleSize,
            color: "#2980b9",
            fontFamily: "Pacifico"
          }}
        >
          Ryley Randall
        </div>
        <div
          style={{
            fontSize: styles[size].bodySize,
            color: "#333",
            fontWeight: 500,
            fontFamily: "'Montserrat Alternates', sans-serif"
          }}
        >
          Finance Student at Brigham Young University
        </div>
      </div>
    </div>
  );
}
