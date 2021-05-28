/* x = 30, z = 20*/
var x = 30, z = 20;

function logicalOperators() {
    
    console.log("Logical NOT Operator");
    
    console.log(!null); //true
    console.log(!0); //true
    console.log(!NaN); //true
    console.log(!z); //false
    console.log(!x); //false


    console.log("Logical OR Operator");
    let result = x || z;
    if (result == 5){
        console.log("x || z is true where value of x and z are "+x + "\tand\t" + z)
    }
    else {
        console.log("x || z is false where value of x and z are "+x + "\tand\t" + z)
    }

    console.log("Logical AND Operator");

  
    result = x && z;
    if (result == 5){
        console.log("x && z is true where value of x and z are "+x + "\tand\t" + z)
    }
    else {
        console.log("x && z is false where value of x and z are "+x + "\tand\t" + z)
    }

}

function assignmentOperators() {
    
  
            var c = "Test";
            
            document.write("Arithmetic Operators");
            document.write("<br />"); 

            document.write("x + z = ");
            let result = x + z;
            document.write(result);
            document.write("<br />");
         
            document.write("x - z = ");
            result = x - z;
            document.write(result);
            document.write("<br />");
         
            document.write("x / z = ");
            result = x / z;
            document.write(result);
            document.write("<br />");
         
            document.write("x % z = ");
            result = x % z;
            document.write(result);
            document.write("<br />");
         
            document.write("x + z + y = ");
            result = x + z + y;
            document.write(result);
            document.write("<br />");
         
            x = ++x; //this means increment
            document.write("++x = ");
            result = ++x;
            document.write(result);
            document.write("<br />");
         
            z = --z; //this means decrement
            document.write("--z = ");
            result = --z;
            document.write(result);
            document.write("<br /> <br /> <br />");

            /*Comparison Operators*/

            document.write("Comparison Operators");
            document.write("<br />");
            document.write("(x == z) => ");
            result = (x == z);
            document.write(result);
            document.write("<br />");
         
            document.write("(x < z) => ");
            result = (x < z);
            document.write(result);
            document.write("<br />");
         
            document.write("(x > z) => ");
            result = (x > z);
            document.write(result);
            document.write("<br />");
         
            document.write("(x != z) => ");
            result = (x != z);
            document.write(result);
            document.write("<br />");
         
            document.write("(x >= z) => ");
            result = (x >= z);
            document.write(result);
            document.write("<br />");
         
            document.write("(x <= z) => ");
            result = (x <= z);
            document.write(result);
            document.write("<br />");

}