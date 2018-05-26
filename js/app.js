let deck = document.querySelector(".deck");
let card = document.querySelectorAll(".card");
let cards = [...card];
let moves = 0;
const stars = document.getElementsByClassName('fa fa-star');
let second = 0;
let minute= 0;
let modal = document.querySelector('.modal');
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


let openCards = [];
let matchCards = [];


/* add event listener */
  cards.forEach(function(card){
    card.addEventListener('click', function(e){
        startTimer();
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


function gameSuccess(){
    clearInterval(interval);
    finalTime = timer.innerHTML;
    modal.style.display = "block";
  
}



function cardsDoMatch(){
      openCards[0].classList.add('match');
      openCards[0].classList.remove('open','show');
      openCards[1].classList.add('match');
      openCards[1].classList.remove('open','show');
      matchCards.push(openCards[0]);
      matchCards.push(openCards[1]);
      openCards = [];
      if (matchCards.length = 16){
        gameSuccess;
      }
    }


function cardsNotMatch(){
  setTimeout(function(){
      openCards.forEach(function(card){
        card.classList.remove('open','show');
      })
      openCards = [];
    },500);
  }


/*counting moves and change star ratings */
function starRating(){
  moves ++;
  document.querySelector('.moves').innerHTML = moves;
    if (moves > 6 && moves < 10){
      stars[2].style.visibility = 'hidden';
    }
    if (moves >= 10 && moves <15) {
      stars[1].style.visibility = 'hidden';
    }
    if (moves >= 15) {
      stars[0].style.visibility = "hidden";
    }
}

var timer = document.querySelector('.timer');
var interval = null;


function startTimer() {
    var  interval = window.setInterval(function () {
          timer.innerHTML = minute + " min " + second + " sec"
            second++;
            if (second == 60) {
                minute++;
                second= 0;
            }
        }, 1000);
    }

function stopTimer(){
    clearInterval(interval);
}
