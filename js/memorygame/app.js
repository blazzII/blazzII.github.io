document.addEventListener('DOMContentLoaded', () => {
  // Array of card objects with name and file
  const cardArray = [
    {name: 'bell', img: 'images/bell.svg'},
    {name: 'candystick', img: 'images/candystick.svg'},
    {name: 'gingerbreadman', img: 'images/gingerbreadman.svg'},
    {name: 'ornament', img: 'images/ornament.svg'},
    {name: 'santaclaus', img: 'images/santaclaus.svg'},
    {name: 'snowbulb', img: 'images/snowbulb.svg'},
    {name: 'snowman', img: 'images/snowman.svg'},
    {name: 'stocking', img: 'images/stocking.svg'},
    {name: 'tree', img: 'images/tree.svg'},
    {name: 'bell', img: 'images/bell.svg'},
    {name: 'candystick', img: 'images/candystick.svg'},
    {name: 'gingerbreadman', img: 'images/gingerbreadman.svg'},
    {name: 'ornament', img: 'images/ornament.svg'},
    {name: 'santaclaus', img: 'images/santaclaus.svg'},
    {name: 'snowbulb', img: 'images/snowbulb.svg'},
    {name: 'snowman', img: 'images/snowman.svg'},
    {name: 'stocking', img: 'images/stocking.svg'},
    {name: 'tree', img: 'images/tree.svg'},
    {name: 'hat', img: 'images/hat.svg'},
    {name: 'hat', img: 'images/hat.svg'}
  ];

  cardArray.sort( () => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const message = document.querySelector('#message');
  const timeDisplay = document.querySelector('#time');
  const bestTime = document.querySelector('#bestTime');
  const btnReset = document.querySelector('#reset');

  var cardsChosen = [];
  var cardsChosenId = [];
  var score = 0;
  var seconds = 0;
  var gameTimer;
   // initialize sound files
   var nomatch = new sound('../media/error.mp3');

  function createBoard() {
    clearInterval(seconds);
    for (let i = 0; i < cardArray.length; i++) {
      let cardImage = document.createElement('img');
      cardImage.setAttribute('src', 'images/blank.svg');
      cardImage.setAttribute('alt', 'Match Me Card Image');
      cardImage.setAttribute('data-id', i);
      cardImage.addEventListener('click', flipCard);

      let card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.append(cardImage);
      grid.appendChild(card);
    }

    // set up the timer callback function to run every second
    gametimer = setInterval(() => {
      seconds++;
      updateTime(seconds);
    }, 1000);

    // get best time from box
    if (localStorage.getItem('matchMeBestTime')) {
      bestTime.textContent = `Time to Beat: ${localStorage.getItem('matchMeBestTime')} seconds`;
    } else {
      bestTime.textContent = `Time to Beat: New Game`;
    }


  }

  function updateTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainderSeconds = seconds % 60;
    let display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    timeDisplay.textContent = display;
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id');
    if (cardId !== cardsChosenId[0]) {
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
      this.setAttribute('src', cardArray[cardId].img);
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
      }
    }
  }

  function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].parentElement.style.backgroundColor = "tomato";
      cards[optionTwoId].parentElement.style.backgroundColor = "tomato";
      score++;
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.svg');
      cards[optionTwoId].setAttribute('src', 'images/blank.svg');
      nomatch.play();
    }
    cardsChosen = [];
    cardsChosenId = [];
    //scoreDisplay.textContent = score;

    if (score === cardArray.length/2) {
      message.textContent = 'Completed!';
      clearInterval(gametimer);
      localStorage.setItem('matchMeBestTime', seconds);
      btnReset.style.display = 'block';
    }
  }

  createBoard();

});