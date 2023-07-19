import React from "react";
import { Navbar } from "../../components";
import {  Wrapper } from "./styles";
import {Rubens, About, Experiencias} from "..";

function Site() {
  return (
    <Wrapper>
      <Navbar />

      <Rubens />
      <About />
      <Experiencias />
    </Wrapper>
  );
}

export default Site;
