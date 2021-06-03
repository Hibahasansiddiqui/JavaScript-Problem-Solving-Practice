function myFunction(){
    var percentage = prompt("Enter your Percentage");
    pass = parseFloat(percentage);

    if(pass > 85) {
        Grade = 'A';
    }
    else if (pass > 80 && pass <=85) {
        Grade = 'A-';
    }
    else if (pass > 70 && pass <=80) {
        Grade = 'B';
    }
    else if (pass > 60 && pass <=70) {
        Grade = 'C';
    }
    else if (pass > 40 && pass <=60) {
        Grade = 'D';
    }
    else if (pass <= 40 && pass <=35) {
        Grade = 'E';
    }

    switch(Grade) {
      case "A":
        text = "Congrats! You got A!";
        console.log(Grade)
      break;
      case "A-":
      text = "Well Done! You got A-";
      console.log(Grade)
      break;
      case "B":
      text = "There is a reason B is known for Brilliant, Congrats you got B!";
      console.log(Grade)
      break;
      case "C":
      text = "Fair enough, you got C!";
      console.log(Grade)
      break;
      case "D":
      text = "You need to work harder, you got D!";
      console.log(Grade) 
      break;
      case "E":
      text = "Better luck next time, you got E";
      console.log(Grade)     
      break;
      default:
      text = "That is not a valid number";
      console.log ('default condition')
    }
}
