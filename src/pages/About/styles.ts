import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw ;
  height: 100vh ;
  background: black;
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 0%, 1)'/><path d='M40 45a5 5 0 110-10 5 5 0 010 10zM0 45a5 5 0 110-10 5 5 0 010 10zM0 5A5 5 0 110-5 5 5 0 010 5zm40 0a5 5 0 110-10 5 5 0 010 10z'  stroke-width='1' stroke='hsla(0, 100%, 16%, 1)' fill='none'/><path d='M20 25a5 5 0 110-10 5 5 0 010 10z'  stroke-width='1' stroke='hsla(0, 100%, 16%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;

  }
`;

export const Text = styled.div`
  color: white;
  font-size:16px;
  padding: 20px;
  max-width: 600px;
  text-align: center;
`;

export const Crop = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  
`

export const Image = styled.img`
  object-fit: cover;
  width: 300px;
 
  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const Inline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 50px 0 0 0;
`

export const Logo = styled.img`
  height: 50px;
  margin: 0 10px;
  /* background: black; */
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`