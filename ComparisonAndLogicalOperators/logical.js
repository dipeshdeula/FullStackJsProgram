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
/*
let number = 10;
if(number>0)
{
    console.log("Positive number");
}
    */

//if-else
//Defn: Executes one block of code if a conditon is true, and another block if it is false.
//Example
/*
let number = -5;
if(number>0)
{
    console.log("Positive number");
}
else{
    console.log("Negative number");
}
    */

//else-if
//Defn: Specifies a new condition if the first condtion is false.
//Example:
/*
let score = 85;
if(score>=90)
{
    console.log("Grade: A");
}
else if(score>=80){
    console.log("Grade: B");
}
else if(score>=70){
    console.log("Grade: C");
}
else if(score>=60){
    console.log("Grade: D")
}
else{
    console.log("Grade: E");
}
    */

//switch
//Defn: Evaluates an expression and executes code based on matching case.
//Example
/*
let fruit = "apple";
switch(fruit)
{
    case "banana":
        console.log("Bananas are yellow.");
        break;
    case "apple":
        console.log("Apples are red");
        break;
    default:
        console.log("Unknown fruit");
}
        */

//Loops
//for loop
//Defn: Repeats a block of code a specified number of times
//Example:
/*
for(let i=0;i<5;i++)
{
    console.log("Iteration:"+i);
}

//for in loop
//Defn: Iterates over the properties of an object
//Example:
let person = {name: "Dipesh",age:22,city:"Hetauda"};
for(let key in person)
{
    console.log(key + ":"+person[key]);
}

//while loop
//Defn: Repeats a block of code as long as specified condtion is true.
//Example:
let i=0;
while(i<5){
    console.log("Iteration: "+i);
    i++;
}
    */

//Break and continue statements
//Break St:
//Defn: Exits a loop or switch statement prematurely
//Example:
for(let i=0;i<10;i++)
{
    if(i==5){
        break;
    }
    console.log("Iteration: "+i);
}

//continue statement:
//Defn: Skips the current iteration of a loop and proceed to the next one
//Example:
for(let i=0;i<10;i++){
    if(i===5){
        continue;
    }
    console.log("Iteration: " +i);
}