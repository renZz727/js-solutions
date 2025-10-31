function toUpperCase(arr) {
    var result = [];
    result = arr.map(function (st) { return st.toUpperCase(); });
    return result;
}
console.log(toUpperCase(["a", "b", "C"]));
