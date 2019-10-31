import React from "react";
import Couple from "../Assets/couple.JPG";
export default function Intro() {
  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        backgroundColor: "#F2F2F2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ width: "100%", height: "100%", padding: 100 }}>
        <div style={{ fontSize: 72, color: "#2980b9", fontFamily: "Pacifico" }}>
          About Me
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              fontSize: 32,
              flexBasis: "50%",
              color: "#333",
              fontWeight: 500,
              fontFamily: "'Montserrat Alternates', sans-serif"
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
            Soon after getting home, I met the love of my life and got married
            in the Newport Beach, California
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#333",
              flexBasis: "50%",
              fontWeight: 500,
              fontFamily: "'Montserrat Alternates', sans-serif",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <img alt={"engagment"} style={{ width: "60%" }} src={Couple} />
          </div>
        </div>
      </div>
    </div>
  );
}
