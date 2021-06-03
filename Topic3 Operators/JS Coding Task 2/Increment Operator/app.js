let num1 = 5;
    document.write("<br /><br />");
    document.querySelector("#head").innerHtml = document.write("The number is " + num1) ;

function addValue() {
    document.querySelector("#head").innerHtml = document.write("Variable is incremented to " + (num1+5));
}