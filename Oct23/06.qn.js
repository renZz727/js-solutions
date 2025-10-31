var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
function takesDirection(direction) {
    if (direction === "Up")
        return "You moved ".concat(Direction.Up);
    else if (direction === "Down")
        return "You moved ".concat(Direction.Down);
    else if (direction === "Left")
        return "You moved ".concat(Direction.Left);
    else if (direction === "Right")
        return "You moved ".concat(Direction.Right);
}
console.log(takesDirection("Up"));
console.log(takesDirection("Down"));
