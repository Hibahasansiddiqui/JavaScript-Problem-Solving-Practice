let agesArray = [12,45,56,4]
agesArray.map(arrPrint)

function arrPrint(i,ary){
    console.log(ary)
    console.log(i)

}

//Map method
let newarray = agesArray.map(multiply)

function multiply(ary) {
  console.log(ary * 10)
}

//Array of Objects
let usersData = [

    {
        name: 'Saeed', lastName: 'Ahmad', school: 'UoT', profession: 'engineer',
    },
    
    {
     name: 'Ali', lastName: 'Khan', school: 'TUM',  profession: 'researcher',
    }
    
    ];

// Use map method to print each value in a table. 

console.log(usersData.map(objectPrint));
function objectPrint(data){
    return data.name + data.lastName + data.school + data.profession
}