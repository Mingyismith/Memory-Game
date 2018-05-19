/*
 * Create a list that holds all of your cards
 */
 const cardArray = [
   'fa-diamond',
   'fa-diamond',
 	 'fa-paper-plane-o',
 	 'fa-paper-plane-o',
 	 'fa-anchor',
 	 'fa-anchor',
 	 'fa-bolt',
 	 'fa-bolt',
 	 'fa-cube',
 	 'fa-cube',
 	 'fa-bomb',
 	 'fa-bomb',
 	 'fa-leaf',
 	 'fa-leaf',
 	 'fa-bicycle',
 	 'fa-bicycle'];

const deck = document.querySelector('.deck');

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

function clearBoard() {
  let shuffledArray = shuffle(cardArray);
  for (var i = 0; i < cardArray.length; i++) {
    const cardItem = document.createElement('li')
    cardItem.classList.add('card');

    const cardImg = document.createElement('i');
    cardImg.classList.add(shuffledArray[i]);
    cardItem.appendChild(cardImg);

    })
   }
  deck.appendChild(cardItem);
}



function displayCard(selectCard){
  selectCard.classList.add("open");
  selectCard.classList.add("show");
  selectCard.classList.add("disabled");
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


 /* add event listener for each card
 function flipCards() {
 for (var i=0; i<cardArray.length; i++){
 cardArray[i].addEventListener('click',matchCards{

   })



 let flippedCards = [];
 function matchCards (){

   if (flippedCards[0] !== "" && flippedCards[1] !==""{
     if (flippedCards[0].innerHTML === flippedCards[1].innerHTML){
         flippedCards[0].classList.add("match");
         flippedCards.push(this);
         flippedCards[1].classList.add("match");
          flippedCards.push(this);
     else {
       flippedCards[0].classList.remove("show", "open");
       flippedCards[1].classList.remove("show", "open");
       flippedCards[0].classList.add("mismatched");
       flippedCards[1].classList.add("mismatched");
     }

     }

*/
