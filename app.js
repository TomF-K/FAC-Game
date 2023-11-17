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

    display.innerHTML = guess.join("");
    
    })

})

// Submit words 

const submitBtn = document.getElementById("submit");

let attempt = [];

submitBtn.addEventListener("click", function() {
    attempt.push(display.innerHTML);
    console.log(attempt);
// reset tiles 
// reset display
});

// check if word exists in wordList








