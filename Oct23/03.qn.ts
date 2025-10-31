function toUpperCase(arr: string[]): string[] {
  let result: string[] = [];
  result = arr.map((st: string) => st.toUpperCase());
  return result;
}

console.log(toUpperCase(["a", "b", "C"]));
