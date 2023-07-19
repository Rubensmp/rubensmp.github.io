import { Container, Wrapper, TextWrapper, Text, Title, SubTitle, Image, X } from "./styles";
import Dev from '../../assets/Image.png'

function Rubens() {
  return (
    <Wrapper id="inicio">

      <Container>
        <Image src={Dev}></Image>
        <TextWrapper>
          <X className="test"><div ></div></X>
          <Text>Olá! me chamo</Text>
          <Title>Rubens Macedo.</Title>
          <SubTitle>Front-end dev.</SubTitle>
          <X><div></div></X>
        </TextWrapper>
      </Container>
    </Wrapper>
  );
}

export default Rubens;
