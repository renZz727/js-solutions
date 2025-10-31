function findLongestCommonPrefix(arr) {
  let sorted = arr.sort((a, b) => a.length - b.length);
  let shortestWord = sorted[0];
  let prefix = "";
  sorted.splice(0, 1);
  for (let i = 0; i < shortestWord.length; i++) {
    if (sorted.every((word) => word[i] === shortestWord[i]))
      prefix = prefix + shortestWord[i];
  }
  return prefix ? `"${prefix}"` : `""`;
}
console.log(findLongestCommonPrefix(["flower", "flow", "flight"]));
console.log(findLongestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["apple", "app", "application"]));
