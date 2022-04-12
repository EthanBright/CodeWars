//8 kyu js: 3/15/22- Multiply- This code does not execute properly. Try to figure out why.
function multiply(a, b){
  return(a * b)
}

//8 kyu js: 3/16/22- Opposite number: Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
    return -number
  }

//8 kyu js: 3/17/22- Even or Odd: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) { 
    if (number % 2 == 0){
      return 'Even';
    }else{
      return 'Odd';
    }
  }

//8 kyu js: 3/18/22- Convert a Number to a String!: We need a function that can transform a number into a string. What ways of achieving this do you know?
function numberToString(num) {
  // Return a string of the number here!
  num = num.toString();
  return num
}

//8 kyu js: 3/19/22- Convert boolean values to strings 'Yes' or 'No'.: Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
    //...
    if (bool === true){
      return 'Yes'
    }else {
      return 'No'
    }
  }

//8 kyu js: 3/20/22- Reversed Strings: Complete the solution so that it reverses the string passed into it.
function solution(str){
    if (str === "")
        return "";
    else
      return solution(str.substr(1)) + str.charAt(0);
  }

//8 kyu js: 3/21/22- Return Negative: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  // Code?
 if (num <= 0) {
   return num;
 }else{
   return -Math.abs(num)
 }
}

//8 kyu js: 3/22/22- String repeat: Write a function called repeatStr which repeats the given string string exactly n times.
function repeatStr (n, s) {
  if (n>0){
    return s.repeat(n);
  }else{
    return "";
  }
 }
 
 //8 kyu js: 3/23/22- Remove First and Last Character: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
 function removeChar(str){
  //You got this!
  return (str.slice(1,-1));
 }

 //8 kyu js: 3/24/22- Remove String Spaces: Simple, remove the spaces from the string, then return the resultant string.
 function noSpace(x){
  return x.split(/\s/).join('');
}

//8 kyu js: 3/25/22- Beginner Series #1 School Paperwork: Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
function paperwork(n, m) {
  if (n< 0 || m < 0){
    return 0;
  }else{
    return (n*m)
  }
}

//8 kyu js: 3/26/22- Beginner Series #2 Clock: Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.
function past(h, m, s){
  //#Happy Coding! ^_^
  return ((h*3600000)+(m*60000)+(s*1000));
}

//8 kyu js: 3/27/22- Grasshopper - Summation: Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
function summation(num) {
  // Code here
  let sum = 0;
  for(let i = 0; i <= num; i++){
    sum += i;
  }
  return sum;
}

//8 kyu js: 3/28/22- Function 1 - hello world: Write a function "greet" that returns "hello world!"
function greet(){
  return 'hello world!';
}

//8 kyu js: 3/29/22- Beginner - Lost Without a Map: Given an array of integers, return a new array with each value doubled.
function maps(x){
  let double = []
  for(let i = 0; i < x.length; i++){
    double.push(x[i] * 2);
  }
  return double
}

//8 kyu js: 3/30/22- Convert a String to a Number!: We need a function that can transform a string into a number. What ways of achieving this do you know?
var stringToNumber = function(str){
  // put your code here
  return (Math.floor(str));
}

//8 kyu js: 3/31/22- MakeUpperCase: Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
  // Code here
  return str.toUpperCase();
}

//8 kyu js: 4/2/22- You Can't Code Under Pressure #1: Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return (i * 2);
}

//8 kyu js: 4/3/22- Get Planet Name By ID: The function is not returning the correct values. Can you figure out why?
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  
  return name;
}

//8 kyu js: 4/4/22- Sentence Smash
function smash (words) {
  return words.join(" ")
};

//8 kyu js: 4/5/22- Grasshopper - Terminal game move function
function move (position, roll) {
  // return the new position
  let newPosition = (position + (roll * 2));
  return newPosition;
}

//8 kyu js: 4/6/22- Quarter of the year
const quarterOf = (month) => {
  // Your code here
  if (month === 1 || month === 2 || month === 3){
    return 1;
  }else if(month === 4 || month === 5 || month === 6){
    return 2;
  }else if(month === 7 || month === 8 || month === 9){
    return 3;
  }else if(month === 10 || month === 11 || month === 12){
    return 4;
  }else{
    return 'Not a month you goob'
  }
}

//8 kyu js: 4/7/22- Student's Final Grade
function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10 ){
    return 100;
  }else if (exam > 75 && projects >= 5){
    return 90;
  }else if (exam > 50 && projects >= 2){
    return 75;
  }else{
    return 0;
  }
}

//8 kyu js: 4/10/22- Grasshopper - Personalized Message
function greet (name, owner) {
  if(name === owner){
    return 'Hello boss'
  }else{
    return 'Hello guest'
  }
}

//8 kyu js: 4/12/22- Opposites Attract
function lovefunc(flower1, flower2){
  // moment of truth
  let resultf1 = flower1 % 2;
  let resultf2 = flower2 % 2;
  if (resultf1 === resultf2){
    return false;
  }else{
    return true;
  }
}