const square = document.querySelectorAll('.square');
const rat = document.querySelectorAll('.rat');
const time = document.querySelector('#time');
let score = document.querySelector('#score');

let result = 0;
let currentTime = parseInt(time.textContent);

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('rat');
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add('rat');

  hit = randomPosition.id;
}

function moveRat() {
  timerId = null;
  timerId = setInterval(randomSquare, 700);
}

function countDown() {
  currentTime--;
  time.textContent = currentTime;
  if (currentTime <= 0) {
    clearInterval(timerId);
    time.textContent = 'Game Over!';
    square.forEach(className => {
      className.classList.remove('rat');
    });
    // removeEventListener
  }
}

let timerId = setInterval(countDown, 1000);
square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if (id.id === hit) {
      result++;
      score.textContent = result;
    }
  });
});

moveRat();