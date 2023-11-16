// target letters 

let letter = document.getElementsByClassName('letter');

console.log(letter);

// add/remove new class of clicked to toggle appearance


letter.addEventListener("click", function() {
    letter.classList.add("clicked");
  });
  