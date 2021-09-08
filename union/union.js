/*let value: number|string;
value = 120;
console.log("The Numeric value of a value is: "+value);
value = "Welcome";
console.log("The String value of a value is: "+value);  */
/*function display(value: (number | string))
{
    if(typeof(value) === "number")
        console.log('The given value is of type number.');
    else if(typeof(value) === "string")
        console.log('The given value is of type string.');
}
display(123);
display("ABC");*/
/*let arrType:number[]|string[];
let i:number;
arrType = [1,2,3,4];
console.log("Numeric type array:")
  
for(i = 0;i<arrType.length;i++){
   console.log(arrType[i]);
}
arrType = ["India","America","England"];
console.log("String type array:")
  
for(i = 0;i<arrType.length;i++){
   console.log(arrType[i]);
}  */
/*var hello = "hey hi";
var times = 5;
if (times > 3) {
    var hello_1 = "Say Hello JavaTpoint";
    console.log(hello_1); // Output: Say Hello JavaTpoint  
}
console.log(hello); // Compile error: greeter is not defined  */
const foodArray = [
    { name: 'Burrito' },
    { name: 'Pizza' },
    { name: 'Burger' },
    { name: 'Pasta' }
  ];
  for (let i = 0; i < foodArray.length; i++) {
    console.log(`i value: ${i} | Food Name:`, foodArray[i]);
  }
