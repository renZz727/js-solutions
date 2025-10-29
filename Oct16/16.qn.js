function sortOnLength(arr) {
  // return arr.sort((a, b) => a.length - b.length);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].length > arr[j + 1].length) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}
console.log(sortOnLength(["open", "source", "programming", "is", "fun"]));
console.log(sortOnLength(["hello", "world"]));
console.log(sortOnLength(["cat", "dog", "tiger", "elephant"]));
