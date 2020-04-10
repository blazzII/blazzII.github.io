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
const scoreDisplay = document.querySelector('#score');
var cardsChosen = [];
var cardsChosenId = [];
var score = 0;


function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement('object');
    card.setAttribute('class', 'card');
    card.setAttribute('data', 'images/blank.svg');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipcard);
    grid.appendChild(card);
  }
}


function flipcard() {
  var cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute('data', cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

  function checkForMatch() {
    let cards = document.querySelectorAll('object');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert ('🎉You found a match!');
      // cards[optionOneId].setAttribute('data', cardsChosen);
      score++;
    } else {
      cards[optionOneId].setAttribute('data', 'images/blank.svg');
      cards[optionTwoId].setAttribute('data', 'images/blank.svg');
    }
    cardsChosen = [];
    cardsChosenId = [];
    scoreDisplay.textContent = score;

    if (score === cardArray.length/2) {
      scoreDisplay.textContent = 'Completed!';
    }
  }

  createBoard();

});