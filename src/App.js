import { useState } from 'react';
import GameBoard from "./components/GameBoard";
import PlayerSetup from "./components/PlayerSetup";
import { createPlayer } from "./helpers/gameUtils";

function App() {
  const [shouldShowGame, setShouldShowGame] = useState(false);
  const [players, setPlayers] = useState([]);

  const handleStartGame = (values) => {
    Object.entries(values).forEach(([key, value], index) => {
      setPlayers((prevState) => [...prevState, createPlayer(value, index)])
    })
    setShouldShowGame(true);
  }

  const handleScoreChange = (index) => {
    const updates = players.map((player, idx)  => {
      return index === idx ? {...player, score: player.score + 1} : {...player};
    })
    setPlayers(updates);
  }

  const handleNewMatch = () => {
    setShouldShowGame(false);
    setPlayers([]);
  }

  return (
    <div className="App">
      {!shouldShowGame ? <PlayerSetup onStartGame={handleStartGame}/> : <GameBoard players={players} scoreChange={handleScoreChange} newMatch={handleNewMatch} />}
    </div>
  );
}

export default App;
