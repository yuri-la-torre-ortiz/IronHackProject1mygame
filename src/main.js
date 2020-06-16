let array = [];
let attempt = 0;
let counter = 0;

function movieObject() {
  const movie = movies.map(function (el) {
    return { title: el, image: el + ".jpg" };
  });
  return movie;
}
function Game(){
console.log(movieObject());
/* function randomSelect() {
  let film = movieObject();
  let max = (movie.length - 1); 
  let randomNumber = Math.floor(Math.random() * (max));
  let film = movie[randomNumber];
  console.log(film);
  }; */
}

Game();

function guess(character) {
  
  const title = randomSelect();
  if (title.title.toLowerCase().includes(character)){
    for (let i = 0; i < title.length; i++) {
      if (character === title[i]){
        array[i] = title[i];
        counter++;
        if (counter === title.length) return "You win!!!"
      } 
    }
    } else {
      attempt++;
      if (attempt >= 7) return `Game Over.  You're dead.`
      return attempt;
    }
    let newWord = array.join();
    return newWord    
  }
