import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: column;

  padding: 50px;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0px;
  }
`;

export const Text = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 600;
  padding: 0 20px;
  max-width: 600px;
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
`;

export const Image = styled.img`
  object-fit: cover;
  width: 300px;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const PrintContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 40px 0 40px 0;

  &.align-start {
    align-items: flex-start;
  }
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Cel = styled.img`
  object-fit: cover;
  width: 150px;
  margin: 20px;
  @media (max-width: 768px) {
  }
`;

export const Inline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 50px 0;
`;

export const Product = styled.img`
  height: 300px;

  @media (max-width: 768px) {
    height: 200px;
    margin-top: 20px;

    &.remove {
      display: none;
    }
  }
`;

export const SubTitle = styled.div`
  color: grey;
  font-size: calc(10px + 2vw);
  align-self: flex-start;
  margin: 10px 0;
  font-weight: bolder;

  @media (max-width: 768px) {
    font-size: calc(10px + 4vw);
  }
`;

export const PetlogLogo = styled.img`
  height: 100px;

  @media (max-width: 768px) {
    height: 80px;
    margin-top: 20px;
  }
`;

export const Site = styled.img`
  object-fit: cover;
  width: 20%;
  margin: 20px;
  flex-basis: 20%;

  @media (max-width: 768px) {
    flex-basis: 40%;
  }
`;
