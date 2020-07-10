Test("First test", () => {
  anagrams();
});

Test("String split", () => {
  const word = 'hello';
  const result = stringSplit(word);
  const joined = result.join('');
  if (joined === word) {
    pass(`stringSplit function works. ${result} === ${word}`);
  }
});
