/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner



/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.squares')
const messageEl = document.querySelector('#message')
console.log(squareEls)


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  let board = [null,null,null,null,null,null,null,null]
  let turn = 1
  let winner = null
  render()
}

function render(){
  board.forEach(function(sqaure, index){
    if (square === 1){
      squareEls[idx].textContent = 'X'
    } else if (square === -1){
      squareEls[idx].textContent = 'O'
    } else {
      squareEls[idx].textContent = null
    }
  });

  if(winner===null){
    
  }
