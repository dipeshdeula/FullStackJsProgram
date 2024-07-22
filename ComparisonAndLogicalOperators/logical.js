//comparison and logical operators

//Defn: Used to compare two values

//Example
/*
let a = 5;
let b = 10;

console.log(a==b); //false
console.log(a<b); //true
console.log(a !==b); //true
console.log(a=="5"); //true
console.log(a===5); //true
console.log(a==="5");//false

*/

//logical operators
//Defn: Used to combine two or more conditions
//operators: &&(logical AND), || (logical OR), !(logical NOt)

//Example
/*
let age = 20;
let hasLicense = true;

//logical AND
if(age>=18 && hasLicense)
{
    console.log("You can drive .");
}
else{
    console.log("You cannot drive.");
}

//Logical OR
if(age>=18 || hasLicense )
{
    console.log("You can drive.");
}
else{
    console.log("You cannot drive.");
}

//logical NOT
if(age>=18 && !hasLicense==true){
    console.log("You can drive");
}
else{
    console.log("you cannot drive");
}
    */

//Conditional Statements

//if condition
//Defn: Executes a block of code if a specified condition is true.
//Example
let number = 10;
if(number>0)
{
    console.log("Positive number");
}