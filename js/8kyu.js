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

//8 kyu js: 4/14/22- Area or Perimeter
const areaOrPerimeter = function(l , w) {
  if (l === w){
    return (l * w);
  }else {
    return ((l + l) + (w + w));
  }
}

//8 kyu js: 4/16/22- What is between?
function between(a, b) {
  let list = [];
  for(let i = a; i <= b;i++){
   list.push(i);
  }
  return list;
}

//8 kyu js: 4/17/22- Is the string uppercase?
String.prototype.isUpperCase = function() {
  return this.valueOf().toUpperCase() === this.valueOf();
};

//8 kyu js: 4/18/22- Grasshopper - Variable Assignment Debug
let a = "dev"
let b = "Lab"

let name = a.concat(b);

//8 kyu js: 4/19/22- The Wide-Mouthed frog!
function mouthSize(animal) {
  if (animal.toLowerCase() === 'alligator'){
    return "small"
  }else{
    return "wide"
  }
}

//8 kyu js: 4/20/22- Switch it Up!
function switchItUp(number){
  switch (number){
      case 0:
        return 'Zero';
        break;
      case 1:
        return 'One';
        break;
      case 2:
        return 'Two';
        break;
      case 3:
        return 'Three';
        break;
      case 4:
        return 'Four';
        break;
      case 5:
        return 'Five';
        break;
      case 6:
        return 'Six';
        break;
      case 7:
        return 'Seven';
        break;
      case 8:
        return 'Eight';
        break;
      case 9:
        return 'Nine';
        break;
  }
}

//8 kyu js: 4/23/22- Keep up the hoop
function hoopCount (n) {
  if (n >= 10){
    return 'Great, now move on to tricks'
  }else {
    return 'Keep at it until you get it'
  }
}

//8 kyu js: 4/24/22- Transportation on vacation
function rentalCarCost(d) {
  let total = 40 * d;
  if (d >= 7){
    return total - 50;
  }else if(d >= 3 && d < 7){
    return total - 20;
  }else{
    return total;
  }
}

//8 kyu js: 4/25/22- Reverse List Order
function reverseList(list) {
  return list.reverse();
}

//8 kyu js: 4/26/22- L1: Bartender, drinks!
function getDrinkByProfession(param){
  let input = param.toLowerCase();
  switch (input){
      case 'jabroni':
        return 'Patron Tequila';
        break;
      case 'school counselor':
        return 'Anything with Alcohol';
        break;
      case 'programmer':
        return 'Hipster Craft Beer';
        break;
      case 'bike gang member':
        return 'Moonshine';
        break;      
      case 'politician':
        return 'Your tax dollars';
        break;
      case 'rapper':
        return 'Cristal';
        break;
      default:
        return 'Beer'
        break;
  }
}

//8 kyu js: 4/28/22- Rock Paper Scissors!
const rps = (p1, p2) => {
  if (p1 === 'scissors' && p2 === 'paper'){
    return 'Player 1 won!'
  }else if (p1 === 'paper' && p2 === 'rock'){
    return 'Player 1 won!'
  }else if (p1 === 'rock' && p2 === 'scissors'){
    return 'Player 1 won!'
  }else if (p1 === p2){
    return 'Draw!'
  }else{
    return 'Player 2 won!'
  }
};

//8 kyu js: 4/29/22- Sum Arrays
// Sum Numbers
function sum (numbers) {
  let sumOfNumbers = 0
  for(let i = 0; i < numbers.length; i++){
    sumOfNumbers += numbers[i];
  }
  return sumOfNumbers
};

//8 kyu js: 5/1/22- Grader
function grader(score) {
  if(score < 0.6 || score > 1.0){
    return 'F';
  }else if(score >= 0.9){
    return 'A';
  }else if(score >= 0.8){
    return 'B';
  }else if(score >= 0.7){
    return 'C';
  }else{
    return 'D';
  };
}

//8 kyu js: 5/2/22- Vowel remover
function shortcut (string) {
  let newString = string.split('')
  return newString.map(character => {
    if (/[aeiou]/.test(character)){
      character = ''
    }else {return character}
  }).join('')
}

//8 kyu js: 5/3/22- Can we divide it?
function isDivideBy(number, a, b) {
  let divideA = number % a;
  let divideB = number % b;
  if (divideA === 0 && divideB === 0){
    return true;
  }else{
    return false;
  }
}

//8 kyu js: 5/4/22- Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
function replace(s){
  return s.replace(/[aeiouAEIOU]/g, '!');
}

//8 kyu js: 5/5/22- Convert a Boolean to a String
function booleanToString(b){
  if (b === true){
    return 'true'
  }else{
    return 'false'
  }
} 

//8 kyu js: 5/6/22- Plural
function plural(n) {
  if (n === 1){
    return false;
  }else{
    return true;
  }
}

//8 kyu js: 5/8/22- Drink about
function peopleWithAgeDrink(old) {
  if(old < 14){
    return 'drink toddy';
  }else if(old > 13 && old < 18){
    return 'drink coke';
  }else if(old > 17 && old < 21){
    return 'drink beer';
  }else{
    return 'drink whisky';
  }
};

//8 kyu js: 5/9/22- Palindrome Strings
function isPalindrome(line) {
  let newString = "";
  for (let i = line.length - 1; i >= 0; i--) {
      newString += line[i];
  }
if(newString === line){
  return true;
}else if(newString !== line){
  return false;
}else{
  return undefined;
}
}

//8 kyu js: 5/10/22- 5 without numbers !!
function unusualFive(x) {
  x = 'fives';
  return x.length;
 }

 //8 kyu js: 5/11/22- Find the smallest integer in the array
 class SmallestIntegerFinder {
  findSmallestInt(args) {
    let sorted = args.slice().sort(function(a,b){
      return a-b;
    })
    let smallest = sorted[0];
    return smallest;
  }
}

//8 kyu js: 5/12/22- Welcome!
function greet(language) {
  if (language === 'czech'){
    return 'Vitejte';
  }else if(language === 'danish'){
    return 'Velkomst';
  }else if (language === 'dutch'){
    return 'Welkom';
  }else if (language === 'estonian'){
    return 'Tere tulemast';
  }else if (language === 'finnish'){
    return 'Tervetuloa';
  }else if (language === 'flemish'){
    return 'Welgekomen';
  }else if (language === 'french'){
    return 'Bienvenue';
  }else if (language === 'german'){
    return 'Willkommen';
  }else if (language === 'irish'){
    return 'Failte';
  }else if (language === 'italian'){
    return 'Benvenuto';
  }else if (language === 'latvian'){
    return 'Gaidits';
  }else if (language === 'lithuanian'){
    return 'Laukiamas';
  }else if (language === 'polish'){
    return 'Witamy';
  }else if (language === 'spanish'){
    return 'Bienvenido';
  }else if (language === 'swedish'){
    return 'Valkommen';
  }else if (language === 'welsh'){
    return 'Croeso';
  }else{
    return 'Welcome'
  }
}

//8 kyu js: 5/13/22- Third Angle of a Triangle
function otherAngle(a, b) {
  return 180 - a - b;
}

//8 kyu js: 5/14/22- Filling an array (part 1)
const arr = N => {
  let answer = [];
  for (let i = 0; i < N; i++){
    answer.push(i);
  }
  return answer;
}

//8 kyu js: 5/15/22- Reversed sequence
const reverseSeq = n => {
  let answer = [];
  for (let i = n; i > 0; i--){
    answer.push(i);
  }
  return answer;
};

//8 kyu js: 5/16/22- Jenny's secret message
function greet(name){
  if(name === "Johnny"){
    return "Hello, my love!";
  }else{
    return "Hello, " + name + "!";
  }    
}

//8 kyu js: 5/17/22- Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const answer = distanceToPump / mpg ;
  if (answer > fuelLeft){
    return false;
  }else{
    return true;
  }
};

//8 kyu js: 5/18/22- Simple multiplication
function simpleMultiplication(number) {
  if (number % 2 === 0){
    return number * 8;
  }else{
    return number * 9;
  }
}