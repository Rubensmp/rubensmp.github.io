import React, { useState } from "react";
import RightNav from "../RightNav";
import { Container, Overlay, Wrapper  } from "./styles";

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Wrapper>
    <Overlay isOpen={isOpen}></Overlay>
      <Container isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </Container>
      <RightNav isOpen={isOpen} setOpen={setOpen}/>
    </Wrapper>
  );
};

export default Navbar;
