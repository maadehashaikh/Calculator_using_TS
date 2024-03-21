#! /usr/bin/env node
// called as shabang

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  {message :"Enter first number", type :"number" ,name:"FisrtNumber"},
  {message:"Enter second number" , type :"number" ,name:"SecondNumber" },
  {message:"Select one of these operators to perform action" , 
  type :"list" ,
  name:"operator" ,
  choices:["Addition","Subtraction","Multiplication","Division"]},
]);
console.log(answer);
// conditional statement 
if(answer.operator === "Addition"){
  console.log(`Your value is ${answer.FisrtNumber + answer.SecondNumber}`);
}
else if(answer.operator === "Subtraction"){
  console.log(`Your value is ${answer.FisrtNumber - answer.SecondNumber}`);
}
else if(answer.operator === "Multiplication") {
  console.log(`Your value is ${answer.FisrtNumber * answer.SecondNumber}`);
}
else if(answer.operator === "Division") {
  console.log(`Your value is ${answer.FisrtNumber / answer.SecondNumber}`);
}
else{
  console.log("Please select Valid Operator");
}