const squares = document.querySelectorAll('.grid div');
const result = document.querySelectorAll('#result');
const displayCurrentPlayer = document.querySelector('#current-player');
let currentPlayer = 1;

// populate grid
for (let i = 0, len= squares; i < len; i++) {
  (function(index) {
    squares[i].onclick = () => {
      if(squares[index + 7].classList
    }
  });
}

