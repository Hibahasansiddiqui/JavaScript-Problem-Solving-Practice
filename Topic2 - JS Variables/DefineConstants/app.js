/*How to create a numeric, string, and boolean constants and print them*/
/*The major difference between constant and let is that constant variables cannot be re-assigned or re-arranged
However, declaring a constant object does NOT make the objects properties unchangeable*/

// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Change a property:
car.color = "red";

// Add a property:
car.owner = "Johnson";

// Display the property:
document.getElementById("demo").innerHTML = "Car owner is " + car.owner;

/*Below are some examples for Numeric, String and Boolean constant*/

/*Numeric Constant*/
const Numeric = 100;
console.log(Numeric);

/*string Constant*/
const string = ("Keep calm and keep fasting");
console.log(string);

/*Boolean Constant*/

/*For True*/
const islearning = true;
console.log(islearning);

/*For False*/
let wastingtime = false;
console.log(wastingtime);