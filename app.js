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

let attempt = guess.toString();

// Submit words 

const submitBtn = document.getElementById("submit");

// Check if attempt exists in word list

function checkWord(wordList, attempt) {
    let success = false;
        for (var i = 0; i < wordList.length; i++) {
            if (wordList[i] === attempt) {
                success = true;
            } 
    }
    console.log('success?', success);
}
    

submitBtn.addEventListener("click", function() {
    attempt += display.innerHTML.toLowerCase();
    console.log(attempt);
// check if word exists in wordList
checkWord(wordList, attempt);
// reset tiles 
        
// reset display and tiles
    display.innerHTML = "";
    attempt = '';
    guess = [];
    document.querySelectorAll(".letter").forEach(tile => {
        tile.classList.remove("clicked");
    });
    console.log(attempt);
}); 












