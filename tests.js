Test("The annagrams function returns the anagrams of biro.", () => {
  const expectedResultArray = [
    "biro",
    "bior",
    "brio",
    "broi",
    "boir",
    "bori",
    "ibro",
    "ibor",
    "irbo",
    "irob",
    "iobr",
    "iorb",
    "rbio",
    "rboi",
    "ribo",
    "riob",
    "roib",
    "robi",
    "obir",
    "obri",
    "oibr",
    "oirb",
    "orbi",
    "orib",
  ];
  const expectedResultString = JSON.stringify(expectedResultArray.sort());
  const result = anagrams("biro");
  const resultString = JSON.stringify(result);
  if (resultString === expectedResultString) {
    pass(`There's an array of anagrams: ${resultString}`);
  } else {
    fail(
      `The result ${resultString} isn't the expected result: ${expectedResultString}`
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
    // anagrams("biro");
    wordStore = [];
    const wordString = "b";
    const remainingLetters = ["i", "r", "o"];
    const expectedResultArray = [
      "biro",
      "bior",
      "brio",
      "broi",
      "boir",
      "bori",
    ];
    const expectedResultString = JSON.stringify(expectedResultArray.sort());
    chooseAndPass(wordString, remainingLetters);
    const resultString = JSON.stringify(wordStore);
    if (resultString === expectedResultString) {
      pass(
        `There's an array or words using the remaining letters : ${resultString}`
      );
    } else {
      fail(
        `The wordstore ${resultString} isn't the expected result: ${expectedResultString}`
      );
    }
  }
);

Test("Choose the last letter from the bag and update the word store", () => {
  // Global
  wordStore = ["ehl", "elh", "hle", "leh", "lhe"];
  // anagrams("hel");
  const wordString = "he";
  const remainingLetters = ["l"];
  const expectedResult = [...wordStore, "hel"];
  const expectedResultString = JSON.stringify(expectedResult.sort());
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
  // anagrams("thewords");
  const newWord = "newword1";
  const newWordStoreString = JSON.stringify([
    "newword1",
    "oldword1",
    "oldword2",
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
  // anagrams("thewords");
  wordStore = ["oldword1", "oldword2"];
  const newWord = "newword1";
  addWordToWordstore(newWord);
  const resultString = JSON.stringify(wordStore);
  if (resultString === JSON.stringify(["newword1", "oldword1", "oldword2"])) {
    pass(`There's a new word in the result: ${resultString}`);
  } else {
    fail(`The result is weird: ${resultString}`);
  }
});

Test("Add new word to the word store and it already exists", () => {
  wordStore = ["oldword1", "oldword2"];
  // anagrams("thewords");
  const newWord = "newword1";
  addWordToWordstore(newWord);
  const resultString = JSON.stringify(wordStore);
  if (resultString === JSON.stringify(["newword1", "oldword1", "oldword2"])) {
    pass(`The new (old) word not in the result: ${resultString}`);
  } else {
    fail(`The result is weird: ${resultString}`);
  }
});
