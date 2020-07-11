Test("The annagrams function set the global length config.", () => {
  // Set a global value
  wordlength = 0;
  anagrams("word");
  if (wordlength === 4) {
    pass(`The global word length config value is set correctly: ${wordlength}`);
  } else {
    fail(
      `The global word length config value is not set correctly: ${wordlength}`
    );
  }
});

Test("Remove one letter from the array", () => {
  const remainingLetters = ["o", "l"];
  const expectedResultString = JSON.stringify(["o"]);
  const resultString = JSON.stringify(removeOneLetter(remainingLetters, "l"));
  if (resultString === expectedResultString) {
    pass(
      `The removed one item from an array of remaining letters: ${resultString}`
    );
  } else {
    fail(
      `The returned result ${resultString} isn't the expected array of remaining letters: ${expectedResultString}`
    );
  }
});

Test(
  "Choose a letter from the bag and pass it on, finally updating the word store",
  () => {
    // Setting the globals
    anagrams("hel");
    wordStore = [];
    const wordString = "h";
    const remainingLetters = ["e", "l"];
    const expectedResultString = JSON.stringify(["hel", "hle"]);
    chooseAndPass(wordString, remainingLetters);
    const resultString = JSON.stringify(wordStore);
    if (resultString === expectedResultString) {
      pass(
        `There's a new word string and an array of remaining letters: ${resultString}`
      );
    } else {
      fail(
        `The returned result ${resultString} isn't the wordStore plus the new wordString: ${expectedResultString}`
      );
    }
  }
);

Test("Choose the last letter from the bag and update the word store", () => {
  // Global
  wordStore = ["ehl", "elh", "hle", "leh", "lhe"];
  anagrams("hel");
  const wordString = "he";
  const remainingLetters = ["l"];
  const expectedResultString = JSON.stringify([...wordStore, "hel"]);
  chooseAndPass(wordString, remainingLetters);
  const resultString = JSON.stringify(wordStore);
  if (resultString === expectedResultString) {
    pass(
      `There's a new word string and an array of remaining letters: ${resultString}`
    );
  } else {
    fail(
      `The returned result ${resultString} isn't the wordStore plus the new wordString: ${expectedResultString}`
    );
  }
});

Test("If there are no remaining letters, just update the wordStore", () => {
  // Changing the global word store
  wordStore = ["oldword1", "oldword2"];
  anagrams("thewords");
  const newWord = "newword1";
  const newWordStoreString = JSON.stringify([
    "oldword1",
    "oldword2",
    "newword1",
  ]);
  const remainingLetters = [];
  chooseAndPass(newWord, remainingLetters);
  const resultString = JSON.stringify(wordStore);
  if (resultString === newWordStoreString) {
    pass(`There's a new word in the word store ${resultString}`);
  } else {
    fail(
      `This (${resultString}) isn't what we expected to see in the word store: ${newWordStoreString}`
    );
  }
});

Test("Add new word to the word store", () => {
  // Changing the global word store
  anagrams("thewords");
  wordStore = ["oldword1", "oldword2"];
  const newWord = "newword1";
  addWordToWordstore(newWord);
  const resultString = JSON.stringify(wordStore);
  if (resultString === JSON.stringify(["oldword1", "oldword2", "newword1"])) {
    pass(`There's a new word in the result: ${resultString}`);
  } else {
    fail(`The result is weird: ${resultString}`);
  }
});

Test("Add new word to the word store and it already exists", () => {
  wordStore = ["oldword1", "oldword2"];
  anagrams("thewords");
  const newWord = "newword1";
  addWordToWordstore(newWord);
  const resultString = JSON.stringify(wordStore);
  if (resultString === JSON.stringify(["oldword1", "oldword2", "newword1"])) {
    pass(`The new (old) word not in the result: ${resultString}`);
  } else {
    fail(`The result is weird: ${resultString}`);
  }
});
