function anagram(arr) {
    var firstWord = arr[0].split("").sort().join("");
    var secondWord = arr[1].split("").sort().join("");
    return firstWord === secondWord;
}
console.log(anagram(["listen", "silent"]));
console.log(anagram(["restful", "fluster"]));
console.log(anagram(["hello", "world"]));
