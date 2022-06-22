import { faO, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Scoreboard = ({ players }) => {
  return ( 
      <table className="scoreboard">
        <thead>
          <tr>
            <td></td>
            <td>Player Name</td>
            <td>Score</td>
          </tr>
        </thead>
        <tbody>
          {players.map(player => {
            return (<tr>
              <td className="text__center"><FontAwesomeIcon icon={player.marker ? faO : faX } className="text__white" /></td>
              <td>{player.name}</td>
              <td className="text__center">{player.score}</td>
            </tr>)
          })}
        </tbody>
      </table>
   );
}
 
export default Scoreboard;