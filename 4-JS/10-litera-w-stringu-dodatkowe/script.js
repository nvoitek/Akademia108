function countLetterInWord(word, letter) {
  let count = 0;

  for (let letterInWord of word) {
    if (letterInWord == letter.toUpperCase() || letterInWord == letter.toLowerCase()) {
      count++;
    }
  }

  let cnt = word.match(new RegExp(letter, 'gi')).length
  console.log(cnt)

  return count;
}

console.log(countLetterInWord('Szkoła Programowania Akademia 108', 'a'))