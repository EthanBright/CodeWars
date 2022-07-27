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

//8 kyu js: 5/19/22- L1: Set Alarm
function setAlarm(employed, vacation){
  if(employed === true && vacation === true){
    return false;
  }else if (employed === false && vacation === true){
    return false;
  }else if (employed === false && vacation === false){
    return false;
  }else{
    return true;
  }
}

//8 kyu js: 5/20/22- Grasshopper - Grade book
function getGrade (s1, s2, s3) {
  let average = (s1+s2+s3)/3;
  if (average >= 90 && average <= 100){
    return 'A'
  }else if (average >= 80 && average < 90){
    return 'B'
  }else if (average >= 70 && average < 80){
    return 'C'
  }else if (average >= 60 && average < 70){
    return 'D'
  }else{
    return 'F'
  }
}  

//8 kyu js: 5/21/22- Unfinished Loop - Bug Fixing #1
function createArray(number){
  var newArray = [];
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  return newArray;
}

//8 kyu js: 5/22/22- Keep Hydrated!
function litres(time) {
  return (Math.floor(time * 0.5))
}

//8 kyu js: 5/23/22- Fundamentals: Return
function add(a,b){
  return a+b
}

function divide(a,b){
  return a/b
}

function multiply(a,b){
  return a*b
}

function mod(a,b){
  return a%b
}
 
function exponent(a,b){
  return a**b
}
  
function subt(a,b){
  return a-b
}

//8 kyu js: 5/24/22- Invert values
function invert(array) {
  let arr = array.map(x => x * -1);
  return arr;
}

//8 kyu js: 5/26/22- Square(n) Sum
function squareSum(numbers){
  let square = numbers.reduce((acc, curVal) => {
    return acc + curVal ** 2;
}, 0);
  return square;
}

//8 kyu js: 5/27/22- Grasshopper - Debug sayHello
function sayHello(name) {
  return `Hello, ${name}`
}

//8 kyu js: 5/29/22- Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let double = sonYearsOld * 2;
  if (double > dadYearsOld){
    return double - dadYearsOld;
  }else{
    return dadYearsOld - double;
  }
}

//8 kyu js: 5/30/22- How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  let average = (sum + yourPoints) / (classPoints.length + 1)
  if(yourPoints > average){
    return true;
  }else{
    return false;
  }
}

//8 kyu js: 5/31/22- Basic Mathematical Operations
function basicOp(operation, value1, value2){
  if(operation === '+'){
    return value1 + value2;
  }else if(operation === '-'){
    return value1 - value2;
  }else if(operation === '*'){
    return value1 * value2;
  }else{
    return value1 / value2;
  }
}

//8 kyu js: 6/1/22- Array plus array
function arrayPlusArray(arr1, arr2) {
  let bothArr = arr1.concat(arr2);
  let sum = bothArr.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  })
  return sum;
}

//8 kyu js: 6/2/22- Thinkful - Logic Drills: Traffic light
function updateLight(current) {
  if (current === 'green'){
    return 'yellow';
  }else if (current === 'yellow'){
    return 'red';
  }else{
    return 'green'
  }
}

//8 kyu js: 6/3/22- Sum of positive
function positiveSum(arr) {
  let negatives = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0){
      negatives.push(arr[i]);
    }else{
      sum += arr[i];
    }
  }
   return sum;
}

//8 kyu js: 6/4/22- A Needle in the Haystack
function findNeedle(haystack) {
  let needleIndex = haystack.indexOf('needle');
  return `found the needle at position ${needleIndex}`;
}

//8 kyu js: 6/5/22- Returning Strings
function greet(name){
  return `Hello, ${name} how are you doing today?`;
 }

 //8 kyu js: 6/6/22- Sum The Strings
 function sumStr(a,b) {
  let numA = Number(a);
  let numB = Number(b);
  let sum = numA + numB;
  return sum.toString()
}

//8 kyu js: 6/7/22- Convert number to reversed array of digits
function digitize(n) {
  let reverse = Array.from(n.toString()).map(Number).reverse();
  return reverse;
}

//8 kyu js: 6/8/22- You only need one - Beginner
function check(a, x) {
  let found = a.includes(x);
  return found;
}

//8 kyu js: 6/9/22- Is it even?
function testEven(n) {
  if (n % 2 == 0){
    return true;
  }else if(n === 0){
    return true;
  }else{
    return false;
  }
}

//8 kyu js: 6/10/22- Beginner Series #4 Cockroach
function cockroachSpeed(s) {
  return Math.floor(s * 27.7778);
} 

//8 kyu js: 6/11/22- Grasshopper - Messi goals function
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//8 kyu js: 6/12/22- Beginner - Reduce but Grow
function grow(x){
  return x.reduce((a,b)=> a * b, 1)
}

//8 kyu js: 6/13/22- Grasshopper - Basic Function Fixer
function addFive(num) {
  var total = num + 5
  return total;
}

//8 kyu js: 6/14/22- Grasshopper - Terminal game combat function
function combat(health, damage) {
  let currentHealth = health - damage;
  if (currentHealth < 0){
    return 0;
  }else{
    return currentHealth;
  }
}

//8 kyu js: 6/15/22- Volume of a Cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

//8 kyu js: 6/16/22- Grasshopper - Function syntax debugging
function main (verb, noun){
  return verb + noun;
}

//8 kyu js: 6/17/22- Super Duper Easy
function problem(x){
  if (typeof x == 'number'){
    return x * 50 + 6;
  }else{
    return 'Error';
  }
}

//8 kyu js: 6/18/22- Grasshopper - Combine strings
function combineNames(first, last){
  let fullName = first.concat(' ',last);
  return fullName
}

//8 kyu js: 6/19/22- Age Range Compatibility Equation
function datingRange(age){
  if (age <= 14){
  let min = Math.floor(age - 0.10 * age);
  let max = Math.floor(age + 0.10 * age);
  return `${min}-${max}`;
  }else{
  let min = Math.floor(age/2 + 7);
  let max = Math.floor((age - 7) * 2);
  return `${min}-${max}`;
  }
}

//8 kyu js: 6/20/22- What's the real floor?
function getRealFloor(n) {
  if(n < 13 && n > 0){
    return n - 1;
  }else if(n > 13){
    return n - 2;
  }else{
    return n;
  }
}

//8 kyu js: 6/21/22- Counting sheep...
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(x => x === true).length;
}

//8 kyu js: 6/22/22- Get the mean of an array
function getAverage(marks){
  let sum = marks.reduce(function (a, b) {return a + b;}, 0);
  let number = marks.length;
  return Math.floor(sum / number);
}

//8 kyu js: 6/23/22- Is n divisible by x and y?
function isDivisible(n, x, y) {
  if(n % x == 0 && n % y == 0){
    return true;
  }else{
    return false;
  }
}

//8 kyu js: 6/24/22- Abbreviate a Two Word Name
function abbrevName(name){
  return (
  name
    .split(" ")
    .map((part) => part[0].toUpperCase())
    .join(".")
);
}

//8 kyu js: 6/25/22- Calculate average
function find_average(array) {
  if (array.length > 0){
    const total = array.reduce((a, b) => a + b, 0);
    return total / array.length;
  }else{
    return 0;
  }
}

//8 kyu js: 6/26/22- DNA to RNA Conversion
function DNAtoRNA(dna) {
  let newStr = dna.replace(/T/g, 'U')
  return newStr;
 }

 //8 kyu js: 6/27/22- Calculate BMI
 function bmi(weight, height) {
  let totalBmi = weight / Math.pow(height,2);
  if (totalBmi <= 18.5){
    return 'Underweight'
  }else if(totalBmi <= 25.0){
    return 'Normal'
  }else if (totalBmi <= 30.0){
    return 'Overweight'
  }else{
    return 'Obese'
  }
}

//8 kyu js: 6/28/22- Find Maximum and Minimum Values of a List
var min = function(list){
  let newList = list.sort(function(a, b){return a-b});
  return parseInt(newList.slice(0, 1));
}

var max = function(list){
let newList = list.sort(function(a, b){return a-b});
return parseInt(newList.slice(-1));
}

//8 kyu js: 6/29/22- Is he gonna survive?
function hero(bullets, dragons){
  let bPerD = dragons * 2;
  if (bPerD <= bullets){
    return true;
  }else{
    return false;
  }
 }

 //8 kyu js: 6/30/22- Count of positives / sum of negatives
 function countPositivesSumNegatives(input) {
  const answer = []
  let positiveSum = 0
  let negativeSum = 0

  if(input && input.length) {
    for(let i = 0; i < input.length; i++) {
      if(input[i] > 0) {
          positiveSum += 1
      } else {
          negativeSum += input[i]
      }
    }
    answer.push(positiveSum)
    answer.push(negativeSum)
  }
  return answer
}

 //8 kyu js: 7/1/22- Century From Year
 function century(year) {
  return Math.floor((year-1)/100) + 1;
 }

  //8 kyu js: 7/2/22- String Templates - Bug Fixing #5
  function buildString(...template){
    return `I like ${template.join(", ")}!`;
  }

  //8 kyu js: 7/3/22- Function 2 - squaring an argument
  function square(x){
    return x * x;
  }

  //8 kyu js: 7/4/22- USD => CNY
  function usdcny(usd) {
    let cny = (usd * 6.75).toFixed(2);
    return `${cny} Chinese Yuan`;
  }

  //8 kyu js: 7/5/22- Is this my tail?
  function correctTail(body, tail){
    let lastLetter = body.slice(-1);
    if(tail === lastLetter){
      return true;
    }else{
      return false;
    }
  } 

  //8 kyu js: 7/6/22- Merge two sorted arrays into one
  function mergeArrays(arr1, arr2) {
    let merge = arr1.concat(arr2);
    let newArr = [...new Set(merge)];
    return newArr.sort(function(a,b){
      return a-b;
    });;
  }

  //8 kyu js: 7/7/22- Correct the mistakes of the character recognition software
  function correct(string){
    return string.replace(/0/g, 'O').replace(/5/g, 'S').replace(/1/g, 'I');
  }

  //8 kyu js: 7/10/22- Bin to Decimal
  function binToDec(bin){
    return parseInt(bin, 2);
   }

//8 kyu js: 7/11/22- Training JS #1: create your first JS function and print "Hello World!"
function helloWorld(){
  let str = 'Hello World!';
  console.log(str);
}

//8 kyu js: 7/12/22- String cleaning
function stringClean(s){
  let newString = s.replace(/\d+/g, '');
  return newString;
}

//8 kyu js: 7/13/22- Convert a string to an array
function stringToArray(string){
  let arr = string.split(' ');
   return arr;
 }

 //8 kyu js: 7/14/22- Removing Elements
 function removeEveryOther(arr){
  for (var i = 1; i <= arr.length; i += 1)
      arr.splice(i, 1);
   return arr;
  }

  //8 kyu js: 7/15/22- Welcome to the City
  function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
  }

  //8 kyu js: 7/16/22- Is it a number?
  function isDigit(s) {
    if (typeof s != "string") return false 
    return !isNaN(s) && !isNaN(parseFloat(s))
  }

  //8 kyu js: 7/17/22- FIXME: Replace all dots
  var replaceDots = function(str) {
    return str.replace(/\./g, '-');
  }

  //8 kyu js: 7/18/22- Exclamation marks series #1: Remove an exclamation mark from the end of string
  function remove (string) {
    if(string.slice(-1) === '!'){
      return string.slice(0, -1);
    }else{
      return string
    }
  }

  //8 kyu js: 7/19/22- Template Strings
  var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`
  }

  //8 kyu js: 7/20/22- isReallyNaN
  const isReallyNaN = (val) => {
    return Number.isNaN(val);
   };

   //8 kyu js: 7/21/22- Name Shuffler
   function nameShuffler(str){
    let arr = str.split(' ')
    return arr.reverse().join(' ');
  }

  //8 kyu js: 7/22/22- Reversed Words
  function reverseWords(str){
    let arr = str.split(' ');
    let output = [];
    while(arr.length){
      output.push(arr.pop())
    }
    return output.join(' ')
  }

  //8 kyu js: 7/23/22- Count the Monkeys!
  function monkeyCount(n) {
    let count = [];
    for(let i = 1; i <= n; i++){
         count.push(i) 
    }
    return count;
  }

  //8 kyu js: 7/24/22- Are You Playing Banjo?
  function areYouPlayingBanjo(name) {
    let firstLetter = name.toUpperCase().slice(0,1);
    if(firstLetter === 'R'){
      return `${name} plays banjo`;
    }else{
      return `${name} does not play banjo`;
    }
  }

  //8 kyu js: 7/26/22- If you can't sleep, just count sheep!!
  var countSheep = function (num){
    let i = 0;
    let result = '';
    if(num === 0){
      return '';
    }else{
      do {
      i = i + 1;
      result = result + i + ' sheep...';
      }while (i < num);
      return result;
    }
  }