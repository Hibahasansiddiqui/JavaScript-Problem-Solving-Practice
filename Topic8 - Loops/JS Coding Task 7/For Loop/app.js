let games = ["football", "cricket", "hockey", "squash", "swimming"]

//For Loop
for (var i=0;i<games.length;i++){
    if ("cricket" == games[i]) {
        console.log("Cricket Exists!")
    } else {
        console.log("Does not Exist")
    }
}

//ForEach Loop
games.forEach(myFunction => {
    
    function myFunction() {
        if ("cricket" == games[i]) {
        console.log("Cricket Exists!")
        } else {
        console.log("Does not Exist")
        }
    }
});

//forOf Loop

for (i of games) {
    if ("cricket" == games[i]) {
    console.log("Cricket Exists!")
    } else {
    console.log("Does not Exist")
    }
}