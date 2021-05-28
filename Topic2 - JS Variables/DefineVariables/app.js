/*How to create a numeric, string, and boolean variable and print them*/

/*In Javascript, Variables are holders that can store different information values. 
Variables are highly useful in situations where you need to use a value in multiple command lines and then need to change that value frequently. 
Variables can also be used to write processing codes for data to be entered by users like in forms where the user can enter any value but you need to add some processing codes for those values before they are actually entered. = sign is used to assign values to variables. 
Each of the variables are referred by a unique name in javascript. Here's an example.*/

CharacterData="Hiba Muneer Mamdani";
document.write(CharacterData);

/*Numeric data are written without the single or double quotes because javascript identifies numbers written inside the quotes as strings. 
Numbers can be with or without a decimal.*/

/*numeric variable*/

var Number = 27;
console.log(Number);

/*Strings is any text or numeric characters that appear between the double quotes or single quotes is string. 
Generally, use of single quotes is much preferred by developers but there are cases where you must use double quotes 
and cases where we must use single quotes as shown in the example below.*/

//string variable//

var String1 = ("Will Hiba be able to complete JS code challenge?");
console.log(String1);
 
/*Boolean data can hold only one of the two values, true or false. 
It's mostly used in conditional statements to carry out one task 
if the result is true or do something else in case the result value is false.*/

//boolean variable//

//For true

var isCoding = true;
console.log(isCoding);

//For False

let isReading = false;
console.log(isReading);