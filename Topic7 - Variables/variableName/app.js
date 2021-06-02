function one() {
    let x = "orange";
    console.log(x);
}

function two() {
    let x = "orange";
    console.log(x);
}

//It is not printing. Functions do not through an error though.

//Declare a variable using var

var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 2


//Global variable

let numb = 44;

function third() {

console.log(numb);
}

//Yes we can access global variable in the functions