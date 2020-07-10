Test("First test", () => {
  anagrams();
});

Test("String split", () => {
  const word = "hello";
  const result = stringSplit(word);
  const joined = result.join("");
  if (joined === word) {
    pass(`stringSplit function works. ${result} === ${word}`);
  }
});

Test("Last letter moves to the front", () => {
  const word = "hell";
  const result = last2Front(word);
  if (result === ["hell", "hlel", "lhel"]) {
    pass(`There's an array of expected words: ${JSON.stringify(result)}`);
  }
});
