function frequencyCount(sen: string): obj {
  const word: string[] = [...sen];
  let frequencyCount: obj = {};
  for (let i = 0; i < word.length; i++) {
    let count = 0;
    for (let j = 0; j < word.length; j++) {
      if (word[i] === word[j]) {
        count++;
      }
    }
    frequencyCount[word[i]] = count;
  }
  return frequencyCount;
}
type obj = { char?: string; count?: number };

console.log(frequencyCount("hello"));
console.log(frequencyCount("programming"));
