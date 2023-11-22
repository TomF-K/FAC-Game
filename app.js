// declare wordlist

const wordList = ["cat","cop","top","doe","pot","pote","pen","toe", "tow", "town", "dune", "pew"];

let guess = [];

let usedWords = [];

let score = 0;


// select display element

const display = document.getElementById("display");


// select score element

const scoreDisplay = document.getElementsByClassName('score');


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

let attempt = guess.toString();


// Submit words 

const submitBtn = document.getElementById("submit");

// Check if attempt exists in word list

function checkWord(wordList, attempt) {
    let success = false;
        for (var i = 0; i < wordList.length; i++) {
            if (wordList[i] === attempt) {
                success = true;
                keepScore();
            } 
    }
    console.log('success?', success, score);
}

function keepScore() {
    let wordLength = attempt.length;
    if(success = true && wordLength === 3) {
        score++;
        console.log(wordLength);
    }
    if(success = true && wordLength === 4) {
        score += 2;
        console.log(wordLength);
    }
    if(success = true && wordLength === 5 ) {
        score += 3;
        console.log(wordLength);
    }
    if(success = true && wordLength === 6) {
        score += 4;
        console.log(wordLength);
    }

}
    

submitBtn.addEventListener("click", function() {
    attempt += display.innerHTML.toLowerCase();
    console.log(attempt);
checkWord(wordList, attempt);

        
// reset display and tiles
    display.innerHTML = "";
    attempt = '';
    guess = [];
    document.querySelectorAll(".letter").forEach(tile => {
        tile.classList.remove("clicked");
    });
}); 












