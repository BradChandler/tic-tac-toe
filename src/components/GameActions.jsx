
const GameActions = ({reset, newMatch}) => {
  return ( 
    <div className="menu flex flex__between">
      <button className="btn btn__blue-grey" onClick={() => reset()}>New Game</button>
      <button className="btn btn__blue-grey" onClick={() => newMatch()}>Change Players</button>
    </div>
  );
}
 
export default GameActions;