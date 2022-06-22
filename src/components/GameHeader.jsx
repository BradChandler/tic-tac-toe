
const GameHeader = ({ gameNumber, winCoords, players, activePlayer, turnNumber }) => {
  return ( 
    <section className="flex flex__between">
        <h1 className="text__white">Game {gameNumber}</h1>
        {
          turnNumber > 9 && !winCoords ? 
          <p className="text__white text__md">Draw!</p> :
          <p className="text__white text__md">{winCoords ? `${players[activePlayer].name} Won!` : `${players[activePlayer].name}'s Turn`}</p>

        }
      </section>
   );
}
 
export default GameHeader;