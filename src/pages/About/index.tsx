import React from "react";
import { Container, Wrapper, Text, Crop, Image, Inline, Logo } from "./styles";
import Dev from "../../assets/Foto1.png";
import Linkedin from "../../assets/Linkedin.png";
import Instagram from "../../assets/Instagram.png";
import Github from "../../assets/Github.png";

function Rubens() {
  return (
    <>
      <Wrapper id="sobre">
        <Crop>
          <Image src={Dev} />
        </Crop>
        <Inline>
          <a
            href="https://github.com/Rubensmp"
            target="_blank"
            rel="noreferrer"
          >
            <Logo src={Github} />
          </a>
          <a
            href="www.linkedin.com/in/rubens-macedo-pereira"
            target="_blank"
            rel="noreferrer"
          >
            <Logo src={Linkedin} />
          </a>
          <a
            href="https://www.instagram.com/rubens_mp/"
            target="_blank"
            rel="noreferrer"
          >
            <Logo src={Instagram} />
          </a>
        </Inline>
        <Text>rubens.mp1@gmail.com</Text>

        <Container>
          <Text>
            Sou engenheiro de computação pela Universidade Federal do Rio Grande
            do Norte, bacharel em Ciências e tecnologia e tecnólogo em Jogos
            digitais pelo Instituto Metrópole Digital. Sou entusiasta em
            tecnologia, na área de desenvolvimento de aplicações, ciência de
            dados e na área de jogos. Profissionalmente fiz parte de projetos de
            e-commerce, desenvolvendo dashboard para vendedores, um aplicativo
            mobile para os clientes e uma rede social para pets, também
            desenvolvi páginas ecommerce e landing pages.
          </Text>
        </Container>
      </Wrapper>
    </>
  );
}

export default Rubens;
