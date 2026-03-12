document.addEventListener('DOMContentLoaded', () => {
  const cardTypes = [
    { name: 'bell', img: 'images/bell.svg' },
    { name: 'candystick', img: 'images/candystick.svg' },
    { name: 'gingerbreadman', img: 'images/gingerbreadman.svg' },
    { name: 'ornament', img: 'images/ornament.svg' },
    { name: 'santaclaus', img: 'images/santaclaus.svg' },
    { name: 'snowbulb', img: 'images/snowbulb.svg' },
    { name: 'snowman', img: 'images/snowman.svg' },
    { name: 'stocking', img: 'images/stocking.svg' },
    { name: 'tree', img: 'images/tree.svg' },
    { name: 'hat', img: 'images/hat.svg' }
  ];

  const BLANK_CARD = 'images/blank.svg';
  const BEST_TIME_KEY = 'matchMeBestTime';

  const grid = document.querySelector('.grid');
  const message = document.querySelector('#message');
  const timeDisplay = document.querySelector('#time');
  const bestTimeDisplay = document.querySelector('#bestTime');
  const btnReset = document.querySelector('#reset');

  if (!grid || !message || !timeDisplay || !bestTimeDisplay || !btnReset) {
    return;
  }

  let deck = [];
  let cardsChosen = [];
  let cardsChosenId = [];
  let matchedCardIds = new Set();
  let score = 0;
  let seconds = 0;
  let gameTimer = null;
  let isCheckingMatch = false;

  // Keep current sound utility while avoiding errors when audio playback is blocked.
  const noMatchSound = new sound('../media/Blue-lobster-meme.mp3');

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function updateTimeDisplay(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const remainderSeconds = totalSeconds % 60;
    timeDisplay.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  }

  function renderBestTime() {
    const savedTime = Number(localStorage.getItem(BEST_TIME_KEY));
    if (Number.isFinite(savedTime) && savedTime > 0) {
      bestTimeDisplay.textContent = `Time to Beat: ${savedTime} seconds`;
      return;
    }

    bestTimeDisplay.textContent = 'Time to Beat: New Game';
  }

  function saveBestTimeIfNeeded(currentSeconds) {
    const savedTime = Number(localStorage.getItem(BEST_TIME_KEY));
    const hasNoBest = !Number.isFinite(savedTime) || savedTime <= 0;
    const isNewBest = currentSeconds < savedTime;

    if (hasNoBest || isNewBest) {
      localStorage.setItem(BEST_TIME_KEY, String(currentSeconds));
      renderBestTime();
    }
  }

  function startTimer() {
    if (gameTimer) {
      clearInterval(gameTimer);
    }

    gameTimer = setInterval(() => {
      seconds += 1;
      updateTimeDisplay(seconds);
    }, 1000);
  }

  function resetSelection() {
    cardsChosen = [];
    cardsChosenId = [];
    isCheckingMatch = false;
  }

  function checkForMatch() {
    const cards = grid.querySelectorAll('.card img');
    const [optionOneId, optionTwoId] = cardsChosenId;

    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].parentElement.style.backgroundColor = 'tomato';
      cards[optionTwoId].parentElement.style.backgroundColor = 'tomato';
      matchedCardIds.add(optionOneId);
      matchedCardIds.add(optionTwoId);
      score += 1;
    } else {
      cards[optionOneId].setAttribute('src', BLANK_CARD);
      cards[optionTwoId].setAttribute('src', BLANK_CARD);
      try {
        noMatchSound.play();
      } catch (error) {
        // Ignore audio playback errors so gameplay can continue.
      }
    }

    resetSelection();

    if (score === deck.length / 2) {
      message.textContent = 'Completed!';
      clearInterval(gameTimer);
      saveBestTimeIfNeeded(seconds);
      btnReset.style.display = 'block';
    }
  }

  function flipCard(event) {
    if (isCheckingMatch) {
      return;
    }

    const cardImage = event.currentTarget;
    const cardId = Number(cardImage.getAttribute('data-id'));

    if (
      matchedCardIds.has(cardId) ||
      cardsChosenId.includes(cardId)
    ) {
      return;
    }

    cardsChosen.push(deck[cardId].name);
    cardsChosenId.push(cardId);
    cardImage.setAttribute('src', deck[cardId].img);

    if (cardsChosen.length === 2) {
      isCheckingMatch = true;
      setTimeout(checkForMatch, 500);
    }
  }

  function createBoard() {
    deck = shuffle([...cardTypes, ...cardTypes]);
    cardsChosen = [];
    cardsChosenId = [];
    matchedCardIds = new Set();
    score = 0;
    seconds = 0;
    isCheckingMatch = false;

    grid.innerHTML = '';
    message.textContent = 'Good Luck!';
    updateTimeDisplay(seconds);
    btnReset.style.display = 'none';

    for (let i = 0; i < deck.length; i += 1) {
      const cardImage = document.createElement('img');
      cardImage.setAttribute('src', BLANK_CARD);
      cardImage.setAttribute('alt', 'Match Me Card Image');
      cardImage.setAttribute('data-id', String(i));
      cardImage.addEventListener('click', flipCard);

      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.append(cardImage);
      grid.appendChild(card);
    }

    renderBestTime();
    startTimer();
  }

  createBoard();
});