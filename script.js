//  128         : number
//  "mohammad"  :  String
//  true        : boolean
//  false       : boolean

// console.log(true);
// console.log(128);
// console.log("Mohamad");

//ahmad
//100
//18
//true

// type  name   value
// camelCase

// Data Type
/*
1. String    Text, character      "Mohammad is a developer", "c", "18"
2. Number     20 10 88 90.4 3.5 3.1415 
3. Boolean    true   false 
4. null       
5. undefined   
6. Symbol
7. Big Int 

*/
//console.log(typeof "Ali");
// 1.  dont start the name with (symbol, space , number )
// 2.  use camelcase if there are more than one
/*
var studentName = "Ali";
var studentLastName = "Mohammadi";
var studentFullName = studentName + " " + studentLastName;
console.log(studentName + "\n" + studentLastName);
console.log(studentFullName);
var studentAge = 18;
var studentAge = "Mahmod";
console.log(studentAge);
*/
//let  : change
// const :     use more
// var: not usable

//console.log(100 / 0);
//let hotel;
//console.log(hotel);

// ===================
//      OPERATORS
// =====================
// ================================Arithmetic
// + - * / %  ++  --
/*
let age = 21;
const isAdult = age - 18;
//age = age +2;

age++;
age--;
const reminder = age % 4;

const exp = 2 ** 4;
console.log(exp);
*/
// ========================= assignment
//const name = "Mohammad";
//let age = 21;
//age += 2;
//age -= 2;
///age *= 2;
//age /= 2;
//age %= 2;

//========================= Comparison
//age = 2;
//const isOldEnough = age > 18;
//const isOld = age >= 18;
//const isYoung = age <= 17;

//console.log(isYoung);

// ======================== Operator precedence
//const mohammad = "Mohammad"
//const ageMohammad = 21;

//const hamed = "Hamed";
//const ageHamed = 17;

//let age = 19;
//const isOldEnough = ageMohammad - 18 > ageHamed - 18;

//============================= STRING
// const employee = "Mohammad";
// const job = "Teacher";
// const age = 23;
// his name is Mohammad and he is a teacher and  he is
// 23 years old
/*
const introduction =
  "His name is " +
  employee +
  " and he is a " +
  job +
  " and he is " +
  age +
  " years old";
*/
//Template Literal
// const introduction = `His name is ${employee} and he is a
// ${job} and he is ${age} years old`;
// console.log(introduction);

// ====================== Conditional Statement
// 1. if/ else
// let age = 17;
// if (age >= 18) {
//   console.log("You are old enough to drive");
// } else if (age === 17) {
//   console.log("You need to wait one more year to drive");
// } else {
//   console.log("You are not old enough to drive");
// }

// const msg = prompt("We have two programs: \n 1. Web \n 2. Network");

// if (msg === "network") {
//   console.log("You can take Network+ Class");
// } else if (msg === "web") {
//   console.log("You can take HTML and CSS Class");
// } else {
//   console.log("You should choose between Network and Web");
// }

// ========================= Equality Operator
// =   ==   ===
// =    assign
// ==   equal
// === equal value and datatype

// if (18 == "18") console.log("they have equal values");
// if (18 === 18) console.log("they have equal values and equal datatypes");

// ========================= Truthy and falsy value
// true
// false  7
// 1. undefined
// 2. 0
// 3. ""
// 4. null
// 5. false
// 6. NaN   (Not a Number)
// 7. Symbol

// const falsy = 0;
// if (falsy) {
//   console.log("Exception Miracle");
// } else {
//   console.log(`${falsy} is a falsy value`);
// }

// ====================== Logical Operator
// &&   ||   !

// boolean  true false

// I. Apple company Wants to hire  an employee
// 1. Education
// &
// 2. Exprience

/*  
            Exprience    Education
Education      true          false
Exprience      false         true
            A     B
        A   
        B

*/

// II. Microsoft company wants to  hire an emplyee
// 1. Education
// || or
// 2. Exprience

// Education      true
// Exprience      true
//                false

//
// !
/*
const education = "master";
const exprience = 10;
if (!education && !exprience) {
  console.log("You are Hired!");
} else if (exprience || education) {
  console.log("You can enroll with passing an exam");
} else {
  console.log("You failed");
}

console.log(true && "3" && 2);
console.log("this" && false);
console.log(0 && true);

console.log(false || 0 || undefined);
*/

// ======================= type conversion
//const age = prompt("How Old are you?");
// bug حشره    debug
//console.log(Number(age));
//if (Number(age) === 18) {
// console.log("You are 18 years old");
//}

// console.log(String(23));
// console.log(typeof Number("47"));

// ======================== type coercion
// console.log(typeof (10 + "10"));
// console.log("23" - "13" - 9);
// console.log("2" / "2");

//====================== Switch Case
// if else statement
// switch case statement

// const day = prompt("Select a day:");
// switch (day) {
//   case "Saturday":
//     console.log("Exercise");
//     break;
//   case "Monday":
//     console.log("Programming");
//     console.log("eat out with family");
//     break;
//   case "Friday":
//     console.log("Rest");
//     console.log("picnic");
//     break;
//   default:
//     console.log("Work");
// }

// ====================== Expression & Statement
// Expression : Produce a value
// Ex: 2+2    5*4
// const age = 18;
// console.log(age);
// console.log(`I am ${age} years old`);

// // Statement
// console.log("I am Statement");

// ========================= ternery operator
// <   >  =  <=  >=   ?
// Expression

// const age = 17;
// age > 18 ? console.log("You can drive") : console.log("You can not drive");
// console.log(`Now I can ${age > 18 ? "drive" : "not drive"}`);
// const jobPosition = "Manager";
// jobPosition === prompt("Enter your job position: ")
//   ? console.log("Welcome")
//   : console.log("You are not Authorized to enter!");

// ========================= "use strict"
// prevent from bug
// help me to debug
// ("use strict");

// let getLicense = false;
// const passTest = true;

// if (passTest) getLicense = true;
// console.log(getLicense);

// ========================== "Function"
// Function : group of codes
// specific task
// Reuse

// const firstName = prompt("Enter your name:");
// const lastName = "Shafiq";

// Create a function (Declare)
// function cograts(f, l = "Mohammadi") {
//   return `You successfully passed level ${f} ${l} `;
// }

// const age = 20;
// call the function
// cograts(firstName, lastName);
// console.log(`Your name is ${}`)

// Function Expression
// const birthYear = prompt("Enter your birth year:");
// const age = function (birthYear) {
//   // some lines od code
//   console.log(birthYear);
//   return 2023 - Number(birthYear);
// };

// console.log(`I am ${age(birthYear)} years old`);
// local variable

function calcAge(birthYear) {
  return 2023 - birthYear;
}

//================================= arrow function
// const birthYear = 1959;

// const yearstoRetirement = (birthYear) => {
//   const retirement = 65;
//   const age = 2023 - birthYear;
//   const yearstoRetirement = retirement - age;
//   if (yearstoRetirement > 0) {
//     return `You can work ${yearstoRetirement} year more`;
//   } else {
//     return "You should retire!!";
//   }
// };
// console.log(yearstoRetirement(birthYear));

// ========================================== Calling Function inside another fucntion

// const showFruitPieces = function (fruitAmount) {
//   return fruitAmount * 4;
// };

// const juicer = function (fruitName, fruitAmount) {
//   const fruitPiecesAmount = showFruitPieces(fruitAmount);
//   console.log(`${fruitName} juice with ${fruitPiecesAmount} pieces`);
// };

// juicer("Apple", 3);

//==================================
// let fruits = ["Apple", "Banana", "Orange", "Mango"];
// const food = "Qabli";
// const fruits = ["Apple", "Banana", "Orange", "Mango"];
// let meals = ["Spagetti", "Pizza", "Chicken", 87, true, false, undefined, null];
// console.log(meals);
// const student1 = ["Mohamad", "Web Design", 23, true];
// console.log(typeof null);
// console.log(student.length);
// // Delete last one
// student.pop();
// // Add after the last item
// student.push("Bahmani");
// // Delete the first item
// student.shift();
// // Add before the first item
// student.unshift("Mohammad");
// // Shows index number of the item
// console.log(student.indexOf("Web Design"));
// // Shows a certain item exist or no (return boolean)
// console.log(student.includes("Ahmad"));
// //

// console.log(student);

// ================================ OBJECTS
// pair (key, value)
let student = {
  firstName: "Mohammad",
  lastName: "Bahmani",
  age: 23,
  isPassed: true,
};
console.log(student);
const car = {
  model: "BMW",
  color: "red",
  year: 2018,
};
console.log(typeof car);

// 1. dot notation
console.log(student.lastName);
console.log(car.model);

// 2. square bracket
console.log(student["age"]);
console.log(student["firstName"]);
console.log(car["year"]);
