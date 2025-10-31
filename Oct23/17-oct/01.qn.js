function findSum(arr) {
    var sum = "";
    var total = 0;
    arr.forEach(function (element) {
        var sum = "";
        element.forEach(function (ele) {
            sum = sum + String(ele);
        });
        total = total + Number(sum);
    });
    return total;
}
var numbers = [
    [1, 2, 3],
    [0, 7],
];
console.log(findSum(numbers));
