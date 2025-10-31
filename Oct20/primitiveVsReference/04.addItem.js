function addItem(arr, item) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  newArray.push(item);
  return newArray;
}

const arr = [1, 3, 5, 7];
const newArray = addItem(arr, 9);
console.log("New Array " + newArray);
console.log("Original Array " + arr);
