import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   font-size: 3rem;
`;
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 97%;
   top: 50%;
   bottom: 40px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   color: green;
   cursor: auto;
`
export const Container = styled.div`
   background-color: black;
   height: 30px;
   position: sticky;
   top: 0;
   left: 0;
   z-index: 1;
   width: 100%;
`