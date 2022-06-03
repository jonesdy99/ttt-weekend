/*-------------------------------- Constants --------------------------------*/
const winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[2,5,8],[1,4,7],[0,4,8],[2,4,6]]



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner



/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.squares')
const messageEl = document.querySelector('#message')
const resetBtn = document.querySelector('.reset')
console.log(resetBtn)


/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(squares){
  squares.addEventListener('click',handleClick)
})

resetBtn.addEventListener('click',init)




/*-------------------------------- Functions --------------------------------*/

init()


function init() {
  board = [null,null,null,null,null,null,null,null,null]
  turn = 1
  winner = null
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
  

  if(winner === null){
    messageEl.textContent = `Keep going! Player ${turn === 1 ? "X" : "0"}'s turn!`
  } else if(winner === 'T'){
    messageEl.textContent = `Oh! It's a tie! Go Again!`
  } else if (winner === 1 || winner === -1){
    messageEl.textContent = `Player ${winner === 1 ? "X" : "0"} won!`
  } 
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
          winner = 1
          return
      } else  if (sum === -3) {
          winner = -1
          return
      } else if (board.includes(null) === false) {
          winner = 'T'
          return
      }else {
          winner = null
      }
  }
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