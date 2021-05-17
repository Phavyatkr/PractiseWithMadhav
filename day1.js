//This console log is used for printing the values 
//Javascript rims the code line by line 

const { Console } = require("console")

console.log("Hello World")

//Now i am learning about Variables 
//There are three variable let, const, Var
//Let Variable - This variable can be used to reassign the values later on . It keeps updating to latest value

let dayOneL1 = "This is to check the Value in String"

//Commenting this to see how the daOne variable gets reassigned to the new value
/*console.log(`Result L1:  
${dayOneL1}`)*/

dayOneL1 = 1011
console.log(`let Variable - Result for L2 let variable
     ${dayOneL1}`)

//Const Variable - This is used so that this variable cannot be reassigned. the value will be deleted completely and add the new value

const //dayOneL2 = (`This to check the constant variable`)
dayOneL2 = 1223
//This should throuw error now 
console.log(`const Variable - Result for L2 const variable : 
    ${dayOneL2}`)

    /*Var Variable - This is similar to let variable . 
    Var was the initial variable used in Javascript . 
    Recently let and const was added to the javascript*/

    var dayOneL3 = (`This is one more time to check the var variable`)

   // console.log(dayOneL3)

    dayOneL3 = 2005

    console.log(`var Variable -Result for L2 of the var variable
    ${dayOneL3}`)

console.log(dayOneL3+1011)
