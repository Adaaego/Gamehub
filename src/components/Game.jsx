//styling and animations 
import styled from "styled-components";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../slice/detailsSlice";

const Game = ({name,image, released, id}) =>{
 const dispatch = useDispatch();
 const {details} = useSelector((state) => state.details);

const loadDetailsHandler = () =>{
    dispatch(fetchDetails(id))
}
    return(
        <StyledGame onClick={loadDetailsHandler}>
         <img src={image} alt={name}></img>
         <h2>{name}</h2>
         <p>released : {released}</p>
        </StyledGame>
    )
}

const StyledGame= styled(motion.div)`
  min-height: 20vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  padding: 1rem;
  background-color: #1e102b;
  border: 1px solid #803998  ;

img{
        width: 100%;
        height: 30vh;
        border-top-right-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
        object-fit: cover;
    }
`;

export default Game;