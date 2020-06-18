let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let alphaArr = alphabet.split('');
let alphabetDiv = document.querySelector(".alphabet");
let hiddenTitle = document.querySelector(".hiddenWord");
let guessedLetters = [];  //Collect guessedLetters
let maskedWord = ""; 
let incorrectGuesses = 0;
let mappedArray = movieObject(movies);
const selectedMovie = randomSelect(mappedArray);

// function 
function renderCorrectGuesses(letter) {
  let span = document.createElement("span");
  span.innerText = letter;
  console.log(letter)
  hiddenTitle.appendChild(span);
}

function createBtn(letter) {
  let btn = document.createElement("button");
  btn.innerText = letter;
  btn.setAttribute('id', letter);
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
let attempt = 0;
let counter = 0;
  
function guess(character) {
  removeBtn(character);
  if (selectedMovie.includes(character)){
    for (let i = 0; i < selectedMovie.length; i++) {
      if (character === selectedMovie[i]){
        guessedLetters[i] = selectedMovie[i];
        counter++;
        document.querySelector(`.index${i}`).innerText = selectedMovie[i];
        //renderCorrectGuesses(character);
      }
    }
  } else {
      attempt++;
      console.log(`You are ${attempt} out of 7 attempts closer to death.`);
  }
  if (attempt === 7) {
    return console.log(`Game Over.  You're dead.`)
  }
  let newWord = guessedLetters.filter(Boolean).join('');
  if (newWord === selectedMovieLetters){
    return console.log(`You win!!!`);
  }
  console.log(newWord);
  return newWord    
  }

  selectedMovie.split('').forEach((letter, i) => {
    let span = document.createElement("span");
    span.innerText = "_";
    span.classList.add(`index${i}`)
    hiddenTitle.appendChild(span);
    if(letter === " "){
      span.innerText = " ";
    }
  })