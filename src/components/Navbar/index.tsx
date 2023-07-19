import React from "react";
import { Hamburguer } from "../";

import { Container } from "./styles";

const Navbar: React.FC = () => {

  return (
    <Container>
      {/* <div /> */}
      <Hamburguer />
    </Container>
  );
};

export default Navbar;
