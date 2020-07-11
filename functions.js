let wordStore = [];

function anagrams(word) {
  const letters = word.split("");
  letters.forEach((letter) => {
    const dwindlingSupplyOfLetters = removeOneLetter(letters, letter);
    chooseAndPass(letter, dwindlingSupplyOfLetters);
  });
  return wordStore;
}

function chooseAndPass(wordString, remainingLetters) {
  if (remainingLetters.length === 0) {
    addWordToWordstore(wordString);
  } else {
    remainingLetters.forEach((newLetter) => {
      const newWordString = wordString + newLetter;
      const dwindlingSupplyOfLetters = removeOneLetter(
        remainingLetters,
        newLetter
      );
      chooseAndPass(newWordString, dwindlingSupplyOfLetters);
    });
  }
}

function removeOneLetter(remainingLetters, letter) {
  let removed = false;
  return remainingLetters.filter((currentItem) => {
    if (currentItem === letter && !removed) {
      removed = true;
      return false;
    } else {
      return true;
    }
  });
}

function addWordToWordstore(newWord) {
  if (!wordStore.includes(newWord)) {
    wordStore.push(newWord);
  }
  wordStore.sort();
}
