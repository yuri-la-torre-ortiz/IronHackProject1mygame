let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let alphaArr = alphabet.split('');
let alphabetDiv = document.querySelector(".alphabet");
let hiddenTitle = document.querySelector(".hiddenWord");
let array = [];

// function 
// document.write("<img src = "assets/A-wood.jpg" height="30" width="30">");
function renderCorrectGuesses(letter) {
  let span = document.createElement("span");
  span.innerText = letter;
  console.log(letter)
  hiddenTitle.appendChild(span);
}



function createBtn(letter) {
  let btn = document.createElement("button");
  btn.innerText = letter;
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

let mappedArray = movieObject(movies);

function Game(){
  //Select random film from array

}
// movieObject(movies);
function randomSelect(movies) {
  let max = (movies.length - 1); 
  let randomNumber = Math.floor(Math.random() * (max));
  let word = movies[randomNumber].title;
  word = word.toUpperCase();
  let guessedLetters = [];  //Collect guessedLetters
  let maskedLetters = "";  
  return word;
}

const selectedMovie = randomSelect(mappedArray);

let attempt = 0;
let counter = 0;
function guess(character) {
  console.log("here", character, selectedMovie);
  if (selectedMovie.includes(character)){
    for (let i = 0; i < selectedMovie.length; i++) {
      if (character === selectedMovie[i]){
        array[i] = selectedMovie[i];
        counter++;
        console.log(array, "this is the array", counter);
        console.log(document.querySelector(`.index${i}`));
        document.querySelector(`.index${i}`).innerText = selectedMovie[i];
        //renderCorrectGuesses(character);
        if (counter === selectedMovie.length) return "You win!!!"
      } 
    }
    } else {
      attempt++;
      console.log(attempt);
      if (attempt >= 7) return `Game Over.  You're dead.`
      return attempt;
    }
    let newWord = array.join();
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