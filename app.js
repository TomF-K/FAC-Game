// declare wordlist

const wordList = ["ace","act","ate","cat","cop","dun","doe","dow","down","eat","fen","few","foe","for","fore","form","fort","mat","mate","mote","mow","mown","more","new","newt","oft","ore","pot","pote","pen","roe","rote","rot","row","tac","tea","toe","top","tow","two","toy","tor","tore","town","dune","pew","pewter","wend","woe","wore","worm","wormy","yore"];

let guess = [];

let usedWords = [];

let score = 0;


// select display element

const display = document.getElementById("display");


// select score element

const scoreDisplay = document.querySelector('.score');

const foundWords = document.querySelector('.used__words-list');


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
                scoreDisplay.textContent = `Score: ${score}`;
                usedWords.push(attempt);
                foundWords.textContent = usedWords;
            } 
    }
    console.log('success?', success, score);
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
    //console.log(attempt);
checkWord(wordList, attempt);

        
// reset display and tiles
    display.innerHTML = "";
    attempt = '';
    guess = [];
    document.querySelectorAll(".letter").forEach(tile => {
        tile.classList.remove("clicked");
    });
}); 












