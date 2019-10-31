import React from "react";

export function App(props) {
  return (
    <div style={{}}>
      <div
        style={{
          height: 200,
          backgroundColor: "#F2F2F2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{ fontSize: 32 }}>We Will Buy your house fast!</div>
      </div>
      <div
        style={{
          height: 400,
          backgroundColor: "#2ecc71",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: "100%",
            height: 380,
            maxWidth: 300,
            backgroundColor: "#FFF",
            borderRadius: 6
          }}
        >
          <form />
        </div>
      </div>
    </div>
  );
}
