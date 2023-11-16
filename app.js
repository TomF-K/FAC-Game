// declare wordlist

const wordList = ["cat","cop","top","doe","pot","pote","pen","toe", "tow", "town", "dune", "pew"];

// select letter buttons

document.querySelectorAll(".letter").forEach(item => {
    item.addEventListener("click", event => {
        console.log("You clicked me!");
    })
})



// loop through buttons and add a click event listener

