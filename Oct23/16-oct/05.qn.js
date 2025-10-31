var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function frequencyCount(sen) {
    var word = __spreadArray([], sen, true);
    var frequencyCount = {};
    for (var i = 0; i < word.length; i++) {
        var count = 0;
        for (var j = 0; j < word.length; j++) {
            if (word[i] === word[j]) {
                count++;
            }
        }
        frequencyCount[word[i]] = count;
    }
    return frequencyCount;
}
console.log(frequencyCount("hello"));
console.log(frequencyCount("programming"));
