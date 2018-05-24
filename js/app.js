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


/*apply event listener to each of the card and show the cards*/

  newDeck.addEventListener('click',function(event){
    openCards.push(event.target);
    event.target.classList.add('open','show');
    matchCards();

    });



  function matchCards() {

    if (openCards[0].children[0].className !== openCards[1].children[0].className) {
      cardsNotMatch();
      }
    };


  function cardsNotMatch(){
    setTimeout(function(){
        openCards[0].classList.remove('open','show');
        openCards[1].classList.remove('open','show');

      }, 1000);

  };

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
*/
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
