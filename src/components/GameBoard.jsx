/* eslint-disable eqeqeq */
/* eslint-disable no-sparse-arrays */
import { useState } from 'react';
import { findWinCoords, generateBoard } from "../helpers/gameUtils";
import GameActions from './GameActions';
import GameHeader from './GameHeader';
import GameSlot from "./GameSlot";
import Scoreboard from './Scoreboard';


const GameBoard = ({ players, scoreChange, newMatch }) => {
  const [board, setBoard] = useState(generateBoard());
  const [activePlayer, setActivePlayer] = useState(0);
  const [turnNumber, setTurnNumber] = useState(1);
  const [gameNumber, setGameNumber] = useState(1);
  const [winCoords, setwinCoords] = useState(null);

  const checkWinCondition = (newBoard) => {
    // check rows for all same marker
    const rowWin = findWinCoords(newBoard, "row");
    if (rowWin) return rowWin;
    // check columns for all same marker
    const transposed = newBoard.reduce((matrix, row) => row.map((cell, index) => (matrix[index] || []).concat(cell)), [])
    const colWin = findWinCoords(transposed, "column");
    if (colWin) return colWin;
    // check diaganals for all same marker
    const diagWin = findWinCoords(newBoard, 'diaganol');
    if (diagWin) return diagWin;
    return null;
  }

  const handleSetSlotStatus = (coords) => {
    const updates = board.map((row) => {
      return row.map((cell) => {
        if (cell.status !== null || winCoords) {
          return {...cell}
        }
        return {
          ...cell,
          status: coords.toString() === cell.coords.toString() ? players[activePlayer].marker : null, 
        }
      })
    })
    setBoard(updates);

    let win;
    if (turnNumber > 4) {
      win = checkWinCondition(updates);
    }
    
    if (win) {
      setwinCoords(win);
      scoreChange(activePlayer)
    } else {
      setActivePlayer(activePlayer ? 0 : 1);
      setTurnNumber(prevState => prevState+= 1)
    }
  }

  const handleReset = () => {
    setBoard(generateBoard());
    setActivePlayer(0);
    setTurnNumber(1);
    setwinCoords(null);
    setGameNumber(gameNumber + 1)
  }

  return (
    <section className="game__container">
      <GameHeader {...{gameNumber, winCoords, players, activePlayer, turnNumber}}/>
      <div className='game__grid'>
        {board.map((row) => row.map(cell => <GameSlot key={cell.borders} setSlotStatus={handleSetSlotStatus} {...{cell, winCoords, turnNumber}} />))}
      </div>
      <Scoreboard players={players} />
      <GameActions reset={handleReset} newMatch={() => newMatch()} />
    </section>
  )
}

export default GameBoard