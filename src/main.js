let array = [];
let attempt = 0;
let counter = 0;
function guess(character) {
    let word = "osmosis";
    if (word.includes(character)){
    for (let i = 0; i < word.length; i++) {
      if (character === word[i]){
        array[i] = word[i];
        counter++;
        if (counter === word.length) return "You win!!!"
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

