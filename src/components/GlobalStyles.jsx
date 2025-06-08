import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *{
 margin : 0; 
 padding: 0;
 box-sizing : border-box
 }

 body{
    background-color: #171127;
    color:#aea0be;
    font-family: "Inter", sans-serif;

 }
 h1{
    font-family: "Rubik Bubbles", system-ui;
    font-size: 3rem;
    margin: 15px 10px;
 }
 h2{
    font-size: 2rem;
   
 }
 p{
    
 }
 a{
    text-decoration: none;
 }
`;

export default GlobalStyles;