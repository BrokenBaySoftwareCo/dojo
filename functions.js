let wordStore = [];
let wordlength = 0;

function anagrams(word) {
  wordlength = word.length;
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
      // if (dwindlingSupplyOfLetters.length > 0) {
      //   dwindlingSupplyOfLetters.forEach((nextLetter) => {
      //     const newWordString = wordString + nextLetter;
      //     chooseAndPass(
      //       newWordString,
      //       removeOneLetter(dwindlingSupplyOfLetters, nextLetter)
      //     );
      //   });
      // }
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
  if (!wordStore.includes(newWord) && newWord.length === wordlength) {
    wordStore.push(newWord);
  }
}

// "biro",
// "bior",
// "brio",
// "broi",
// "boir",
// "bori",
// "ibro",
// "ibor",
// "irbo",
// "irob",
// "iobr",
// "iorb",
// "rbio",
// "rboi",
// "ribo",
// "riob",
// "roib",
// "robi",
// "obir",
// "obri",
// "oibr",
// "oirb",
// "orbi",
// "orib",
