import React from "react";
import Blob from "../Assets/Blob.png";
import Blocks from "../Assets/Blocks.png";
import Frame from "../Assets/frame.png";
export default function Intro() {
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
      <img
        alt={"Blob"}
        style={{
          zIndex: 20,
          width: 600,
          position: "absolute",
          bottom: 0,
          right: 0
        }}
        src={Blocks}
      />
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
        <div style={{ fontSize: 72, color: "#2980b9", fontFamily: "Pacifico" }}>
          Ryley Randall
        </div>
        <div
          style={{
            fontSize: 64,
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
