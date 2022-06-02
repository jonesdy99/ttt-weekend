/*-------------------------------- Constants --------------------------------*/
const winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[2,5,8],[1,4,7],[0,4,8],[2,4,6]]

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner



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
  board = [null,null,null,null,null,null,null,null,null]
  turn = 1
  winner = null
  render()
}

function render(){
  board.forEach(function(element, index) {
    if (board[index] === 1){
      squareEls[index].textContent = 'X'
    } else if (board[index] === -1){
      squareEls[index].textContent = 'O'
    } else {
      squareEls[index].textContent = null
    }
  });
  renderMessage()

  if(winner === null){
    `Keep going! It's ${board} turn!`
  } else if(winner === 'T'){
    `Oh! It's a tie! Go Again!`
  } 
}

function handleClick(evt){
  const 
}




































  //   if(winner === null){
//     return(turn === 1 ? messageEl.textContent = "Player 1's turn" : messageEl)
//     textContent = "Player 2's turn!"
//   } else if (winner === 'T'){
//     return messageEl.textContent = 'We have a tie!'
//   } else {
//     return (winner === 1 ? messageEl.textContent = "Player 1 has won it!" :
//     messageEl.textContent = 'Player 2 has won it!')
//   }
// }
