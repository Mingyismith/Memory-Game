
 const cardArray = [
    'diamond',
    'diamond',
  	 'paper-plane-o',
  	 'paper-plane-o',
  	 'anchor',
  	 'anchor',
  	 'bolt',
  	 'bolt',
  	 'cube',
  	 'cube',
  	 'bomb',
  	 'bomb',
  	 'leaf',
  	 'leaf',
  	 'bicycle',
  	 'bicycle'];

 /* set variables */
 const newDeck = document.querySelector('.deck');
 const timer = document.querySelector('.timer');
 const moves = document.querySelector('.moves');
 const openCards = [];
 const matchedCards = [];


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const shuffledCards = shuffle(cardArray)

function clearBoard() {

  for (let i = 0; i <cardArray.length; i++){
    const card = document.createElement('li');
    card.classList.add('card');
    const cardImg = document.createElement('i');
    cardImg.classList.add('fa', 'fa-' + shuffledCards[i]);
    cardImg.setAttribute('type',shuffledCards[i]);
    card.appendChild(cardImg);
    newDeck.appendChild(card);

  }
}

/* convert HTML collection into an array */
const allCards = Array.from(newDeck.children);

/* apply event listener to each of the card and show the cards*/

allCards.forEach(function(card){
  card.addEventListener('click',function(e){
    openCards.push(card);
    card.classList.add('open','show');
    cardsNotMatch();


  });
});


function cardsNotMatch(){
  if (openCards.length === 2){
    setTimeout(function(){
      allCards.forEach(function(card){
        card.classList.remove('open', 'show');
      })
    openCards.splice(0,2);
    }, 1000);
  }
}
/*newDeck.addEventListener ('click', flipCard);*/

/* apply the flipCard functionality to individual cards using event delegation */
/*  function flipCard(event){
      event.target.classList.add('open','show');
      openCards.push(event.target);
    }*/


/*
  function matchCards() {

  if (openCards[0].querySelector('i').classList.value !== openCards[1].querySelector('i').classList.value) {
      cardsNotMatch();
    } */
  /*else cardsNotMatch();
} */

/*
  function cardsDoMatch(){
    openCards[0].classList.add('match');
    openCards[1].classList.add('match');
    openCards[0].classList.remove('show','open');
    openCards[1].classList.remove('show','open');
    matchedCards.push(openCards[0]);
    matchedCards.push(openCards[0]);
    openCards.splice(0,2);
  }
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
