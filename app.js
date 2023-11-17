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
        console.log(guess);

// display current active letters

        display.innerHTML = guess.join("");

    })

})








