"use strict";
var person = {
    name: "Saurabh",
    height: 6
};
//console.log(person.name);
var arr = [3, 4, 5, 6];
var modifiedArr = arr.map(function (element) {
    return element * 3;
});
console.log(modifiedArr);
