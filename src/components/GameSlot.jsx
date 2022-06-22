import { faO, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GameSlot = ({ cell: {status, coords, borders}, setSlotStatus, winCoords, turnNumber }) => {
  let classes = `game__slot flex flex__center ${borders}`;
  classes += status === null && !winCoords ? ' cursor__pointer empty' : '';
  classes += winCoords && winCoords.some(winCoord => winCoord.toString() === coords.toString()) ? ' won' : '';
  classes += !winCoords && turnNumber > 9 ? ' draw' : '';
  return ( 
    <div className={classes} onClick={() => setSlotStatus(coords)}>
      {status !== null && <FontAwesomeIcon icon={status ? faO : faX } size="3x" className="text__white" />}
    </div>
   );
}
 
export default GameSlot;