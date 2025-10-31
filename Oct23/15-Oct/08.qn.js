function isAnagram(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    firstWord = arr[i];
    let store = [firstWord];
    for (var j = i + 1; j < arr.length; j++) {
      secondWord = arr[j];
      firstWord = firstWord.split("").sort().join("");
      secondWord = secondWord.split("").sort().join("");

      if (firstWord === secondWord) {
        store.push(arr[j]);
        arr.splice(j, 1);
      }
    }
    result.push(store);
  }
  return result;
}

console.log(isAnagram(["care", "race", "acre", "dog", "god", "cat"]));
