Welcome to BrowserBoggle - my attempt to recreate the classic Boggle word game.

DESCRIPTION:

Boggle is a word game where players score points by finding words in a 4x4 grid of letters. Points are awarded based on the length of the word and each round lasts for two minutes. 

This project was inspired by childhood family holidays in the 1990s, when the UK weather meant that we spent more time playing board games than on the beach. 

HOW TO PLAY: 

1. Make words by clicking on letter tiles (selected letters will appear in the display underneath the game board)
2. Click the 'submit' button to enter your word
3. Points will be awarded for valid words (see scoring section below)

SCORING:

1. Words must be a minimum of three letters in length
2. Points are awarded depending on word length:
         3 letters = 1 point
         4 letters = 2 points
         5 letters = 3 points
         6 letters = 4 points
         6+ letters = 5 points

TECHNOLOGIES USED:

BroswerBoggle is built on HTML, CSS, and vanilla JavaScript. 

The main game layout is built using CSS Grid, which I felt was the easiest way to lay out the game board and surrounding elements.

This project was particularly good practice for several areas of JavaScript, including:

- DOM manipulation (displaying text based on highlighted letters and found words)
- Array methods (joining highlighted letters into strings, storing found words)
- Loops (checking if submitted words are valid)
- Setting a time limit for each game and having the timer count down 


FUTURE DEVELOPMENTS:

This version represents the minimum viable product and has several areas that require refining, but I wanted to get something out rather than never submitting a project because it wasn't quite perfect. 

In particular, the alerts for starting/ending the game are horrible and need replacing with properly styled HTML/CSS elements

The other significant limitation of the game is that the letters are the same each time; the next step would be to randomise each letter in the board and validate word sfrom a much larger dictionary. 


