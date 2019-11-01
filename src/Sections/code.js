import React from "react";

export default function Code() {
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
          flexBasis: "33%",
          flex: 1,
          width: "100%",
          minWidth: "200px",
          backgroundColor: "#E0E0E0"
        }}
      >
        THis is how text Effects the spacing
      </div>
      <div
        style={{
          flexBasis: "33%",
          flex: 1,
          minWidth: "200px",
          backgroundColor: "#000"
        }}
      >
        <div style={{ fontSize: 65, color: "#fff" }}>
          THis is how text Effects the spacing
        </div>
      </div>
      <div
        style={{
          flexBasis: "33%",
          flex: 1,
          minWidth: "200px",
          backgroundColor: "#2980b9"
        }}
      >
        <div style={{ fontSize: 65, color: "#fff" }}>
          THis is how text Effects the spacing
        </div>
      </div>
    </div>
  );
}
