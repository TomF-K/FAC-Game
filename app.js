// declare wordlist

const wordList = ["cat","cop","top","doe","pot","pote","pen","toe", "tow", "town", "dune", "pew"];

let guess = [];

const display = document.getElementById("display");


// loop through buttons and add a click event listener

document.querySelectorAll(".letter").forEach(tile => {
    tile.addEventListener("click", event => {
        tile.classList.toggle("clicked");

// push tile value into guess array
        guess.push(tile.textContent);
        // console.log(guess);

// convert active letters into single string

const flatGuess = guess.join("");    

    display.textContent = flatGuess;
        
    })

})

// Submit words 

const submitBtn = document.getElementById("submit");

console.log(submitBtn);

let attempt = [];

submitBtn.addEventListener("click", function() {
    attempt.push(flatGuess);
    console.log(attempt);
});




