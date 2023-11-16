// declare wordlist

const wordList = ["cat","cop","top","doe","pot","pote","pen","toe", "tow", "town", "dune", "pew"];

let guess = [];

const display = document.getElementById("display");


// loop through buttons and add a click event listener

document.querySelectorAll(".letter").forEach(tile => {
    tile.addEventListener("click", event => {
        tile.classList.toggle("clicked");
        guess.push(tile);
        console.log(guess);
    })
// add active tiles to the display
})








