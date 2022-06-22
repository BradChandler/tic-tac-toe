export const createPlayer = (name, index) => ({name, score: 0, marker: index})

const generateBorders = (coords) => {
  let response = '';
  if (coords[0] !== 0) response += "top ";
  if (coords[0] !== 2) response += "bottom ";
  if (coords[1] !== 0) response += "left ";
  if (coords[1] !== 2) response += "right ";
  return response;
}

export const generateBoard = () => {
  const board = [
    [{},{},{}], 
    [{},{},{}],
    [{},{},{}],
  ]
  return board.map((row, rowIndex) => {
    return row.map((cell, cellIndex) => {
      const coords = [rowIndex, cellIndex];
      return {
        status: null, 
        coords, 
        borders: generateBorders(coords)
      }
    })
  })
}

export const findWinCoords = (board, direction) => {
  let winReturn = null;
  if (["row", "column"].includes(direction)) {
    for (const [index, row] of board.entries()) {
      if (winReturn) break;
      if(row.every(cell => cell.status === 0) || row.every(cell => cell.status === 1)) {
        winReturn = direction === 'row' ? [[index, 0], [index, 1], [index, 2]] : [[0, index], [1, index], [2, index]];
      } 
    }
  } else {
    const diagVals = [];
      diagVals.push(board[0][0]);
      diagVals.push(board[1][1]);
      diagVals.push(board[2][2]);
      winReturn = diagVals.every(cell => cell.status === 0) || diagVals.every(cell => cell.status === 1) ? diagVals.map(cell => cell.coords) : null;
      if (!winReturn) {
        diagVals.length = 0;
        diagVals.push(board[0][2]);
        diagVals.push(board[1][1]);
        diagVals.push(board[2][0]);
        winReturn = diagVals.every(cell => cell.status === 0) || diagVals.every(cell => cell.status === 1) ? diagVals.map(cell => cell.coords) : null;
      }
  }
  return winReturn;
}