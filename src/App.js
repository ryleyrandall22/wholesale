import React from "react";
import Intro from "./Sections/intro";
import About from "./Sections/about";
import Code from "./Sections/code";

export function App(props) {
  return (
    <div>
      <Intro />
      <About />
    </div>
  );
}
