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