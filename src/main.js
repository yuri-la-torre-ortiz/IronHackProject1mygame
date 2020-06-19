let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let alphaArr = alphabet.split('');
let alphabetDiv = document.querySelector(".alphabet");
let hiddenTitle = document.querySelector(".hiddenWord");
let guessedLetters = []; //Collect guessedLetters
let incorrectGuesses = 0;
let maxIncorrectGuesses = 7;
let mappedArray = movieObject(movies);
const selectedMovie = randomSelect(mappedArray); 

// function 
function renderCorrectGuesses(letter) {
  let span = document.createElement("span");
  span.innerText = letter;
  hiddenTitle.appendChild(span);
}

function renderHangmanImage() {
  var hangman = document.getElementById("hangman");
  hangman.style.filter = "blur(100px)"
  hangman.style.visibility = "visible";
}

function unblurHangmanImage(degree){
  var blur = degree * 100;
  var hangman = document.getElementById("hangman");
  hangman.style.filter = `blur(${blur}px)`  
}

function createBtn(letter) {
  let btn = document.createElement("button");
  btn.innerText = letter;
  btn.setAttribute('id', letter);
  btn.className = 'alphabet-button'
  btn.style.background = `url('assets/${letter.toUpperCase()}-wood.jpg')`
  btn.style.height = "40px";
  btn.style.width = "40px";
  btn.addEventListener("click", () => guess(letter))
  alphabetDiv.appendChild(btn);
}
alphaArr.forEach((letter) => {
  createBtn(letter);
});

function movieObject(movies) {
  const movie = movies.map(function (el) {
    return { title: el, image: el + ".jpg" };
  });
  return movie;
}


function removeBtn(letter) {
  var btn = document.getElementById(letter);
  btn.remove();
}  
// Randomly select movieObject(movies);
function randomSelect(movies) {
  let max = (movies.length - 1); 
  let randomNumber = Math.floor(Math.random() * (max));
  let word = movies[randomNumber].title;
  word = word.toUpperCase(); 
  return word;
}

const selectedMovieLetters = selectedMovie.split(' ').filter(Boolean).join('');
  
function guess(character) {
  removeBtn(character);
  if (selectedMovie.includes(character)){
    for (let i = 0; i < selectedMovie.length; i++) {
      if (character === selectedMovie[i]){
        guessedLetters[i] = selectedMovie[i];
        document.querySelector(`.index${i}`).innerText = selectedMovie[i];
      }
    }
  } else {
      incorrectGuesses++;
      maxIncorrectGuesses--;
      if (incorrectGuesses === 1) {
      renderHangmanImage();
      } else if (incorrectGuesses > 1 && incorrectGuesses <= 7){
        console.log(maxIncorrectGuesses);
        unblurHangmanImage(maxIncorrectGuesses);
      }

      renderMessage(`You are ${incorrectGuesses} out of 7 attempts closer to death.`);
  }
  if (incorrectGuesses === 7) {
    renderMessage(`Game Over.  You're dead.`)
  }
  let newWord = guessedLetters.filter(Boolean).join('');
  if (newWord === selectedMovieLetters){
    renderMessage(`You win!!!`);
  }
  console.log(newWord);
  return newWord    
  }

selectedMovie.split('').forEach((letter, i) => {
    let span = document.createElement("span");
    span.innerText = "_";
    span.classList.add(`index${i}`);
    span.style.flex = 1;
    span.style.flexWrap = "wrap";
    span.style.padding = '.55rem';
    span.style.fontWeight = "800";
    hiddenTitle.appendChild(span);
    if(letter === " "){
      span.innerText = " ";
    }
})

function renderMessage(message){
    let update = document.querySelector(`.message`)
    update.innerText = message;
    update.style.height = "60px";

}