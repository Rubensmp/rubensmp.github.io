import styled from 'styled-components';

export const Container = styled.nav`
    display: flex;
    z-index: 100;
    justify-content: flex-end;
    background: white;
    /* box-shadow: 0 10px 30px -10px #330401; */
    height: 100px;
    color: black;
    
   a { 
    color: inherit;
    text-decoration: none; 
  } 

  a:hover {
    color: inherit; 
    text-decoration:none; 
    cursor:pointer;  
  }

  padding: 0 50px;
  
`;
