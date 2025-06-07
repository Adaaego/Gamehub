//styling and animations 
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({name,image, released}) =>{
    return(
        <StyledGame>
         <img src={image} alt={name}></img>
         <h1>{name}</h1>
         <p>released : {released}</p>
        </StyledGame>
    )
}

const StyledGame= styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;

img{
        width: 100%;
        height: 30vh;
        border-top-right-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
        object-fit: cover;
    }
`;

export default Game;