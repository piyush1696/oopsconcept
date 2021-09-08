/*enum Direction {
    Up ,
    Down,
    Left,
    Right,
  }
  console.log(Direction.Up,Direction.Down);*/ //0
/*enum E2 {
  A = 1,
  B,
  C,
}
console.log(E2.B);   //2*/
/*enum E {
  B,
  A = getSomeValue(),
  }
function getSomeValue(){
    return 1;
}*/
/*enum E {
  Aa= getSomeValue(),
  Bb,
//Enum member must have initializer.

}
*/ //enums without initializers either need to be first, or have to come after numeric enums initialized with numeric constants or other constant enum members.
//String Enum
/*enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}*/
//Enum used as Object
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
function f(obj) {
    console.log(obj.X);
}
f(E);
