import React from "react";
import {
  Container,
  Wrapper,
  Text,
  Product,
  SubTitle,
  Cel,
  PrintContainer,
  PetlogLogo,
  Site,
} from "./styles";
import Vondme from "../../assets/Vondme.png";
import Vondme1 from "../../assets/vond-home.png";
import Vondme2 from "../../assets/vond-home2.png";
import Vondme3 from "../../assets/vond-home3.png";
import Vondme4 from "../../assets/vond-search.png";
import Petlog from "../../assets/logo_petlog.png";
import Petlog1 from "../../assets/petlog1.png";
import Petlog2 from "../../assets/petlog2.png";
import Petlog3 from "../../assets/petlog3.png";
import Petlog4 from "../../assets/petlog4.png";
import Star from "../../assets/Star.png";
import StarEC from "../../assets/StarEC.png";
import Drogada from "../../assets/DrogAda.png";
import LFS from "../../assets/LFS.png";
import Blog from "../../assets/blog_lfs.png";
import MockupLFS from "../../assets/mockup_lfs.png";

import { Fade } from "react-reveal";

function Rubens() {
  return (
    <Wrapper id="experiencias">
      <Container>
        <Fade left>
          <Text>
            <SubTitle>Vondme</SubTitle>
            {/* Neste projeto, usando react js foi desenvolvido uma dashboard para o vendedor acompanhar todo a movimentação da sua loja virtual. E o aplicativo desenvolvido em react native(iOS e Android),  para o usuário fazer as compras, verificar os pedidos, entre outras funcionalidades. */}
            Participei do projeto de desenvolvimento de um aplicativo de compras
            para celulares em React Native e uma dashboard web em ReactJS para
            os vendedores. No aplicativo móvel, trabalhamos com React Native.
            Permitir aos usuários navegar pelos produtos, adicioná-los ao
            carrinho e efetuar pagamentos seguros. Além disso, implementamos
            recursos como notificações push, sistema de busca e classificação
            por categoria. Para a dashboard dos vendedores, trabalhamos com
            ReactJS para criar uma interface do usuário amigável e funcional. O
            painel de controle permitia que os vendedores gerenciassem seus
            produtos, verificassem pedidos, gerenciassem pagamentos. além disso,
            implementamos recursos para relatórios de vendas e análise de dados.
          </Text>
        </Fade>

        <Fade right>
          <Product src={Vondme} />
        </Fade>
      </Container>

      <Fade bottom>
        <PrintContainer>
          <Cel src={Vondme1} />
          <Cel src={Vondme2} />
          <Cel src={Vondme3} />
          <Cel src={Vondme4} />
        </PrintContainer>
      </Fade>

      <Container>
        <Fade left>
          <Text>
            <SubTitle>PetLog</SubTitle>
            Desenvolvemos aplicativo de rede social para tutores de pets. Como
            parte da equipe de desenvolvimento, trabalhei no front-end do
            aplicativo, garantindo que a interface do usuário fosse intuitiva e
            fácil de usar. Durante o desenvolvimento, usei tecnologias como
            React Native, TypeScript. O resultado foi um aplicativo de rede
            social para pets que permitia que os usuários compartilhassem fotos,
            histórias, passeios ao lado do seus animais de estimação com outros
            proprietários de animais.
          </Text>
        </Fade>
        <Fade right>
          <PetlogLogo src={Petlog} />
        </Fade>
      </Container>
      <Fade bottom>
        <PrintContainer>
          <Cel src={Petlog1} />
          <Cel src={Petlog2} />
          <Cel src={Petlog3} />
          <Cel src={Petlog4} />
        </PrintContainer>
      </Fade>
      <Container>
        <Fade left>
          <Text>
            <SubTitle>eCommerce</SubTitle>
            Desenvolvimento de páginas para comércio digital que oferece
            soluções sob medida para garantir a melhor experiência do usuário.
            Utilizando tecnologias, como HTML, CSS e JavaScript, TypeScript,
            para criar sites intuitivos, responsivos e visualmente atraentes.
          </Text>
        </Fade>
        <Fade right>
          <Product src={Star} className="remove" />
        </Fade>
      </Container>
      <Fade bottom>
        <PrintContainer>
          <Site src={StarEC} />
          <Site src={Drogada} />
        </PrintContainer>
      </Fade>

      <Container>
        <Fade left>
          <Text>
            <SubTitle>Landing Pages</SubTitle>
            Além de páginas de eCommerce, também tenho experiência em
            desenvolvimento de landing pages, utilizando as poderosas
            tecnologias Next.js e TypeScript, por exemplo. Combinando o poder do
            React com a eficiência do servidor, o Next.js permite a criação de
            páginas rápidas, altamente otimizadas e com uma experiência de
            usuário incomparável.
          </Text>
        </Fade>
        <Fade right>
          <Product src={MockupLFS} className="remove" />
        </Fade>
      </Container>
      <Fade bottom>
        <PrintContainer className="align-start">
          <Site src={LFS} />
          <Site src={Blog} />
        </PrintContainer>
      </Fade>
    </Wrapper>
  );
}

export default Rubens;
