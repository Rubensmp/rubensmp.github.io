import React from "react";
import Pdf from '../../assets/CV_RUBENS_MACEDO_PEREIRA.pdf'
import { Container } from "./styles";

interface Props {
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
}

function onResumeClick() {
  window.open(Pdf);
}

const RightNav: React.FC<Props> = ({isOpen, setOpen}) => {
  function onClickItem(id: string){
    setOpen(false)
    window.location.replace(`/#${id}`)
  }

  return (
    <Container isOpen={isOpen}>
        <ul>
          <li onClick={() => onClickItem('inicio')} >
            <a href="#inicio">Início</a>
          </li>
          <li onClick={() => onClickItem('sobre')}>
            <a href="#/">Sobre</a>
          </li>
          <li onClick={() => onClickItem('experiencias')}>
            <a href="#/">Experiências</a>
          </li>
          <li onClick={() => onResumeClick()}>
            <a href="#/">Currículo</a>
          </li>
        </ul>
    </Container>
  );
};

export default RightNav;
