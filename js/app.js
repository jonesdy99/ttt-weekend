/*-------------------------------- Constants --------------------------------*/
const winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[2,5,8],[1,4,7],[0,4,8],[2,4,6]]

/*---------------------------- Variables (state) ----------------------------*/
// let board, turn, winner
  let board = [null,null,null,null,null,null,null,null,null]
  let turn = 1
  let winner = null


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.squares')
const messageEl = document.querySelector('#message')
console.log(squareEls)


/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(squares){
  squares.addEventListener('click',handleClick)
})


/*-------------------------------- Functions --------------------------------*/

init()


function init() {
  // board = [null,null,null,null,null,null,null,null,null]
  // turn = 1
  // winner = null
  render()
}

function render(){
  board.forEach(function(squares, index) {
    if (board[index] === 1){
      squareEls[index].textContent = 'X'
    } else if (board[index] === -1){
      squareEls[index].textContent = 'O'
    } else {
      squareEls[index].textContent = null
    }
  });
  // renderMessage()

  if(winner === null){
    messageEl.textContent = `Keep going! It's ${turn} turn!`
  } else if(winner === 'T'){
    messageEl.textContent = `Oh! It's a tie! Go Again!`
  } else messageEl.textContent = `Player ${turn === 1 ? "0" : 'X'} won!`
}

function handleClick(evt){
  const sqIdx = parseInt(evt.target.id.slice(2))
  console.log(sqIdx)
  if (board[sqIdx] !== null){
    messageEl.textContent = 'This square has been taken! Choose a different one!'
  } else if (winner !== null){
    messageEl.textContent = 'Game Over! Go again!'
  } else { 
    board[sqIdx] = turn
    turn *= -1
    getWinner()
    render()
  }
}

function getWinner() {
    
  for (let i=0; i < winningCombos.length; i++) {
      let sum = board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]
      if (sum === 3) {
          return 1
      } else  if (sum === -3) {
          return -1
      } else if (board.includes(null) === false) {
          return 'T'
      }
  }
  return null
}















// function getWinner(){

// }


// function getWinner() {
    
//   for (let i=0; i < winningCombos.length; i++) {
//       let sum = board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]
//       if (sum === 3) {
//           return 1
//       } else  if (sum === -3) {
//           return -1
//       } 
//   }
//   return null
// }