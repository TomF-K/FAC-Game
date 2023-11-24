// declare wordlist

const wordList = ["ace","act","ate","cat","cop","cope","cot","dun","doe","dot", "dote","dow","down","eat","fen","few","foe","for","fore","form","fort","mat","mate","mote","mow","mown","more","new","newt","oft","ore","own","pot","pote","pen","roe","rote","rot","row","tac","tea","toe","top","tow","two","toy","tor","tore","town","dune","pew","pewter","wend","woe","wore","worm","wormy","yore"];

let guess = [];

let usedWords = [];

let score = 0;


// select display element

const display = document.getElementById("display");


// select score element

const scoreDisplay = document.querySelector('.score');

const foundWords = document.querySelector('.found__words-list');

// select timer and update game time 

const timeLimit = document.getElementById('time-limit');

const startingMinutes = 2;
let gameTime = startingMinutes * 60;

setInterval(updateCountdown, 1000);

function updateCountdown() {
    let minutes = Math.floor(gameTime / 60);
    let seconds = gameTime % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    timeLimit.innerHTML = `Time Left: ${minutes}:${seconds}`;
    gameTime--;
    if(gameTime < 0) {
        alert(`Time's Up! You scored ${score} points!`);
        location.reload();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    alert("Welcome to BrowserBoggle. Click the letter tiles to make words then click the SUBMIT button to enter them. You have 2 minutes to find as many words as possible!");
    updateCountdown();
  });

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
        for (let i = 0; i < wordList.length; i++) {
            if (wordList[i] === attempt) {
                success = true;
                keepScore();
                scoreDisplay.textContent = `Score: ${score}`;
                usedWords.unshift(attempt);
                if(usedWords.length > 5) {
                    usedWords.pop();
                }
                
            } 
    }
    console.log('success?', success, score);
    foundWords.textContent = usedWords.join(" ");
}

function keepScore() {
    let wordLength = attempt.length;
    if(success = true && wordLength === 3) {
        score++;
    }
    if(success = true && wordLength === 4) {
        score += 2;
    }
    if(success = true && wordLength === 5 ) {
        score += 3;
    }
    if(success = true && wordLength === 6) {
        score += 4;
    }
    if(success = true && wordLength > 6) {
        score += 5;
    }
}
    

submitBtn.addEventListener("click", function() {
    attempt += display.innerHTML.toLowerCase();
checkWord(wordList, attempt);
      
// reset display and tiles
    display.innerHTML = "";
    attempt = '';
    guess = [];
    document.querySelectorAll(".letter").forEach(tile => {
        tile.classList.remove("clicked");
    });
}); 












