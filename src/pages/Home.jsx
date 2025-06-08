import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { fetchGames } from "../slice/gameSlice";
import Game from "../components/Game";

//styles and animations
import styled from "styled-components";
import { motion } from "framer-motion";



const Home = () => {
    const dispatch = useDispatch();
    const { popular, upcoming, newGames, status, error } = useSelector((state) => state.games);
  
    useEffect(() => {
      dispatch(fetchGames());
    }, [dispatch]);
  
    const isLoading = status === 'loading';
    const isFailed = status === 'failed';
    const isSuccessful = status === 'succeeded';
  
    return (
      <GameList>
        {isLoading && <p>Loading...</p>}
        {isFailed && <p>Error: {error}</p>}
  
        {isSuccessful && (
          <>
            {/* Popular Games */}
            {popular?.length > 0 && (
              <>
                <h2>Popular Games</h2>
                <Games>
                  {popular.map((game) => (
                    <Game
                      name={game.name}
                      id={game.id}
                      released={game.released}
                      key={game.id}
                      image={game.background_image}
                    />
                  ))}
                </Games>
              </>
            )}
  
            {/* New Games */}
            {newGames?.length > 0 && (
              <>
                <h2>New Games</h2>
                <Games>
                  {newGames.map((game) => (
                    <Game
                      name={game.name}
                      id={game.id}
                      released={game.released}
                      key={game.id}
                      image={game.background_image}
                    />
                  ))}
                </Games>
              </>
            )}
  
            {/* Upcoming Games */}
            {upcoming?.length > 0 && (
              <>
                <h2>Upcoming Games</h2>
                <Games>
                  {upcoming.map((game) => (
                    <Game
                      name={game.name}
                      id={game.id}
                      released={game.released}
                      key={game.id}
                      image={game.background_image}
                    />
                  ))}
                </Games>
              </>
            )}
          </>
        )}
      </GameList>
    );
  };

  const GameList = styled(motion.div)`
padding: 0rem 5rem;
h2{
    padding: 5rem 0rem;
}
`;

const Games = styled(motion.div)`
min-height: 80vh;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;


`;
 
  
  export default Home;