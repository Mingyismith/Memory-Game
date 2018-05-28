let deck = document.querySelector(".deck");
let card = document.querySelectorAll(".card");
let cards = [...card];
let moveCount = document.querySelector('.moves').innerHTML;
let moves = 0;
const stars = document.getElementsByClassName('fa fa-star');
let second = 0;
let minute= 0;
let openCards = [];
let matchCards = [];
let modal = document.querySelector('.modal');
let reset = document.querySelector('.restart');
let timer = document.querySelector('.timer');
let interval;
let starCount;


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
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

/*initialize the game with newly shuffled cards */
function initGame() {
  //shuffle deck
  let shuffledCards = shuffle(cards);
  for (let i = 0; i < cards.length; i++) {
    deck.innerHTML = "";
    for (let card of cards){
      deck.appendChild(card);

    }
  }

}

initGame();
startTimer();



/* Start playing the matching Game
* add event listener to each card to display icons when clicking on each card 
* based on the two cards shown, call in other functions (cardsDoMatch or cardsNotMatch) to check if the cards match
* add number of matched cards to MatchCards to help with ending the game  
*/

/* add event listener to each card to display the icons and examine whether the cards match or not by calling other functions*/
cards.forEach(function(card){
     card.addEventListener('click', function(e){

      /* start timer with the first click */
      if (!card.classList.contains('show') && !card.classList.contains('open') && !card.classList.contains('match') ){
          openCards.push(card);
          card.classList.add('show','open');
              /* once two cards are open, start evaluating the game */
          if (openCards.length === 2){
              starRating();
              if (openCards[0].innerHTML === openCards[1].innerHTML){
              /* if the two opened cards match */
                  cardsDoMatch();
                }
              /* if there is no match */
              else {
                  cardsNotMatch();
              }
            }
          }
      })
  })


/* when cards do match, the cards stay open and show their Match style */
function cardsDoMatch(){
      openCards[0].classList.add('match');
      openCards[0].classList.remove('open','show');
      openCards[1].classList.add('match');
      openCards[1].classList.remove('open','show');
      matchCards.push(openCards[0]);
      matchCards.push(openCards[1]);
      openCards = [];
      /* record game time when all the cards have been matched */
      if (matchCards.length === 16){
        endGame();
      }
  }

/* when cards do not match, cards flip back to original state */
function cardsNotMatch(){
  setTimeout(function(){
      openCards.forEach(function(card){
        card.classList.remove('open','show');
      })
      openCards = [];
    },500);
  }

/*  If all 16 cards match, the game ends and a popup window show the congruations message */ 
function endGame(){
  clearInterval(interval); /* stop timer */
  let endTime = timer.innerHTML;
  let endTimeMsg = document.getElementById('p2');
  let endMove = document.getElementById('p3');
  let starFinal = document.getElementById('p4');
  modal.style.display = "block";
  endTimeMsg.innerHTML += endTime +".";
  endMove.innerHTML += moves + " moves.";
  starFinal.innerHTML += starCount;
  document.querySelector('.close').onclick = function() {
    modal.style.display = "none";
    }
  document.querySelector('.button').onclick = function() {
    resetGame(); /* reset Game */
    }
}



/* Additional functionalities to keep track of the game progress 
* Number of moves made with each pairing
* Number of stars display decreases as game progress
* Timer
* Reset button and Restart Icone
*/

/*counting moves and stars; change star ratings based on number of moves */
function starRating(){
  moves ++;
  moveCount= moves;
  starCount = 3
    if (moves > 6 && moves < 10){
      stars[2].style.visibility = 'hidden';
      starCount = 2
    }
    if (moves >= 10 && moves <15) {
      stars[1].style.visibility = 'hidden';
      starCount = 1
    }
    if (moves >= 15) {
      stars[0].style.visibility = "hidden";
      starCount = 1
    }
}


function startTimer() {
  interval = window.setInterval(function () {
          timer.innerHTML = minute + " min " + second + " sec"
            second++;
            if (second == 60) {
                minute++;
                second= 0;
            }
        }, 1000);
    }

/* reset the game either through the modal window or hitting the restar button */
function resetGame(){
  modal.style.display = "none";
  for (let i = 0; i<stars.length ; i++){
    stars[i].style.visibility = "visible";
  }
  second= 0;
  minute=0;
  startTimer();
  moves = 0;
  openCards = [];
  matchCards = [];
  starCount = 3;
  for (i = 0; i<cards.length; i++){card[i].classList.remove('match','open','show');}
}

/* reset Game with restart button*/
reset.onclick = function() {
  resetGame(); 
}

  
