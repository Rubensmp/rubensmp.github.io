
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw ;
  height: calc(100vh - (100px)) ;
  font-family: Oswald;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - (100px));
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  color: red;
  font-size:calc(12px + 4vw);
`;

export const SubTitle = styled.div`
  color: grey;
  font-size:calc(10px + 2vw);
`;

export const Text = styled.div`
  color: black;
  font-size:calc(8px + 1vw);
  font-weight: bold;
`;

export const TextWrapper = styled.div`
  @media (min-width: 768px) {
    margin-right: 40px;
  }
`;

export const Image = styled.img`
  width: 30vw;
  
  
  @media (max-width: 768px) {
    width: 50vw;
  }
`;

export const X = styled.div`
display: flex;
div {
    position: relative;
    height: 1vw; 
    width: 1vw;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: rotating 2s linear infinite;
  }

  div::before,
  div::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 3px; 
    background-color: black;
    border-radius: 20px;
    background: red;
  }

  div::before {
    transform: rotate(45deg);
  }

  div::after {
    transform: rotate(-45deg);
  }

  @keyframes rotating {
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
  
  
  &.test{
    justify-content: flex-end;
  }
`