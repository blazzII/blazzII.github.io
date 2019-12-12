let countdown1, countdown2, countdown3, countdown4;
let countdowntime1, countdowntime2, countdowntime3,countdowntime4;
let pause = false;
const timerDisplay = document.querySelector('.time');
const buttons = document.querySelectorAll('[data-time]');
const pauseButton = document.querySelector('.pause');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown1);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  countdown1 = setInterval(() => {
    if (pause) {
      return;
    } else {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      // check if we should stop it!
      if (secondsLeft < 0) {
        clearInterval(countdown1);
        return;
      }
      // display it
      countdowntime1 = secondsLeft;
      displayTimeLeft(secondsLeft);
    }
  }, (pause)?0:1000); // every second callback function is executed
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function startTimer() {
  clearInterval(countdown1);
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function endTimer() {
  clearInterval(countdown1);
}

function pauseTimer() {
  if (!pause) {
    pauseButton.textContent = "Go";
    pause = true;
    clearInterval(countdown1);
  } else {
    pauseButton.textContent = "Pause";
    pause = false;
    timer(countdowntime1);
  }
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.inputForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const secs = this.seconds.value;
  clearInterval(countdown1);
  timer(secs); // calls timer function
  this.reset();
});

pauseButton.addEventListener('click', pauseTimer);