import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../slice/gameSlice";

const Home = () =>{
     // Dispatch actions
  const dispatch = useDispatch();

  // Extract popular games, loading status, and error message from the store
  const {popular, upcoming, newGames, status, error} = useSelector((state) => state.games);

  //useEffect to fetch game data when the component mounts
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);


  const isLoading = status === 'loading';
  const isFailed = status === 'failed';
  const isSuccessful = status === 'succeeded'
  return (
    <div>
      <h1>Popular Games</h1>

      {/* Render loading state  */}
      {isLoading && <p>Loading...</p>}

      {/* Render error state */}
      {isFailed && <p>Error: {error}</p>}

      {/*Render list of popular games once fetch is successful */}
      {isSuccessful && (
        <ul>
          {popular.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      )}

      <h2>Upcoming Games</h2>
      {isLoading && <p>Loading...</p>}

      {/* Render error state */}
      {isFailed && <p>Error: {error}</p>}

      {/*Render list of popular games once fetch is successful */}
      {isSuccessful && (
        <ul>
          {upcoming.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
};

export default Home;