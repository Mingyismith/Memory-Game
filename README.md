# Memory Game Project - Udacity FEND Project 2

## Assignment Instruction

Given a starter project with some HTML and CSS styles, I had to convert this game from a static project to an interactive game by adding some javascript logic and modifying the HTML and CSS files.

**How to play the game**
https://rawgit.com/Mingyismith/Memory-Game/master/index.html
- Click on a card
- Keep flipping each card and try to remember where other matching card might be if the two opened cards do not match.
- Match similar cards and try to complete the game as fast you can. 
- If unhappy with how your game has been, click on the restart icon and start over.
- If you win the game, click on the play again button to start over.

**How I build the game**

- I applied the shuffle function provided in the starter code to shuffle the icons from the HTML file.
- For flipping and matching cards, I followed the set-up the project Coach Mike Wales went through and simplified it by calling functions that will apply steps when cards match or don't match.
- When all the cards match, I created a modal popup window to show the congrualations message and the players' game time, star rating, and the number of moves. 
- Finally, I added the restart game logic with either using the restart button in the popup window or the restart icon on top of the game board. 

## Starter Code
The original starter code was pulled from the Udacity Memory Game repository.  https://github.com/udacity/fend-project-memory-game
Font Awesome" icons used in this game are licensed under CC BY 4.0 License. https://fontawesome.com/icons?d=gallery&m=free

