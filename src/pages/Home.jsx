import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../slice/gameSlice";
import Game from "../components/Game";

// Styling and animations 
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  // Dispatch actions
  const dispatch = useDispatch();

  // Extract popular games, loading status, and error message from the store
  const { popular, upcoming, newGames, status, error } = useSelector((state) => state.games);

  // Fetch game data when the component mounts
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const isLoading = status === 'loading';
  const isFailed = status === 'failed';
  const isSuccessful = status === 'succeeded';

  return (
    <GameList>
      {isLoading && <p>Loading...</p>}

      {/* Render error state */}
      {isFailed && <p>Error: {error}</p>}

      {/* Render list of popular games once fetch is successful */}
      {isSuccessful && (
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
