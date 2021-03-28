function countLetterInWord(word, letter) {
  let count = 0;

  for (let letterInWord of word) {
    if (letterInWord == letter) {
      count++;
    }
  }

  //let cnt = word.match(new RegExp(letter, 'g')).length
  //console.log(cnt)

  return count;
}

console.log(countLetterInWord('Szkoła Programowania Akademia 108', 'a'))