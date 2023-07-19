import styled from 'styled-components';

interface Props {
  isOpen?: boolean;
}

export const Container = styled.nav<Props>`
  z-index: 100;
  width: 2rem;
  height: 2rem;
  display: none;
  justify-content: space-around;
  flex-direction: column;
  align-self: center;
  cursor: pointer;
  button {
    all: unset;
    cursor: pointer;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({isOpen}) => isOpen ? '#000' : '#e90d1c'};
    border-radius: 10px;
    transform-origin: 0px;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      transform: rotate(${({isOpen}) => isOpen ? '45' : '0'}deg);
    }

    &:nth-child(2) {
      transform: ${({ isOpen }) => isOpen ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ isOpen }) => isOpen ? 0 : 1};
    }

    &:nth-child(3) {
      transform: rotate(${({isOpen}) => isOpen ? '-45' : '0'}deg);
    }
  }

  @media (max-width: 768px){
    display: flex;
  }
`;

export const Overlay = styled.div<Props>`
    @media (max-width: 768px){
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
      backdrop-filter: blur(2px);
      display: ${({isOpen}) => isOpen ? 'block' : 'none'}
    }
`
export const Wrapper = styled.div`
  display: flex;
`