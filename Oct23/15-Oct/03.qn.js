// type Student = { name: string; marks: number };
// type Result = { name: string; status: "pass" | "fail" };
// function getResults(arr: Student[]): Result[] {
//   let newArr: Result[] = [];
//   for (let item of arr) {
//     let obj: Result;
//     if (item.marks > 48) {
//       obj = { name: item.name, status: "pass" };
//     } else {
//       obj = { name: item.name, status: "fail" };
//     }
//     newArr.push(obj);
//   }
//   return newArr;
// }
function getResults(arr) {
    return arr.map(function (item) { return ({
        name: item.name,
        status: item.marks > 48 ? "pass" : "fail",
    }); });
}
var students = [
    { name: "Alice", marks: 42 },
    { name: "Bob", marks: 67 },
    { name: "Charlie", marks: 35 },
];
console.log(getResults(students));
