import styled from 'styled-components';

interface Props {
  isOpen?: boolean;
}

export const Container = styled.div<Props>`
  font-family: Oswald;
  ul {
    padding: 0;
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    font-weight: bold;
    font-size: 1.2em;

    @media (max-width: 768px){
      top: 0;
      right: 0;
      height: 100vh;
      position: fixed;
      background: #e90d1c;
      align-items: center;
      width: min(75vw, 400px);
      justify-content: center;
      flex-flow: column nowrap;
      transition: all 0.3s ease-in-out;
      transform: ${({isOpen}) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
      font-size: calc(18px + 3vw);

      li {
        padding: 20px
      }
    }
  }

  li {
    list-style-type: none;
    padding: 0 0 0 20px;
  }


`;

