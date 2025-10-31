function wordCount(sentence: string): number {
  let words = sentence.split(" ");
  return words.length;
}

console.log(wordCount("Hello world"));
console.log(wordCount("This is a sample sentence."));
console.log(wordCount("Programming is fun!"));
