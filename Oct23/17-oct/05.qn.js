function findSum() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num.reduce(function (sum, n) { return (sum += n); }, 0);
}
console.log(findSum(1, 2, 3, 4));
console.log(findSum(1, 2));
