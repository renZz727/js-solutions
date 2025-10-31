enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

function takesDirection(direction: Direction): string {
  return `You moved ${direction}`;
}

console.log(takesDirection(Direction.Up));
console.log(takesDirection(Direction.Down));

// or

// enum Direction {
//   Up = "Up",
//   Down = "Down",
//   Left = "Left",
//   Right = "Right",
// }

// const { Up, Down, Left, Right } = Direction;

// function takesDirection(direction: Direction): string {
//   return `You moved ${direction}`;
// }

// console.log(takesDirection(Up));
// console.log(takesDirection(Down));
