//8 kyu: 3/15/22- Multiply- This code does not execute properly. Try to figure out why.
function multiply(a, b){
  return(a * b)
}

//8 kyu: 3/16/22- Opposite number: Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
    return -number
  }

//8 kyu: 3/17/22- Even or Odd: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) { 
    if (number % 2 == 0){
      return 'Even';
    }else{
      return 'Odd';
    }
  }

//8 kyu: 3/18/22- Convert a Number to a String!: We need a function that can transform a number into a string. What ways of achieving this do you know?
function numberToString(num) {
  // Return a string of the number here!
  num = num.toString();
  return num
}

//8 kyu: 3/19/22- Convert boolean values to strings 'Yes' or 'No'.: Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
    //...
    if (bool === true){
      return 'Yes'
    }else {
      return 'No'
    }
  }

//8 kyu: 3/20/22- Reversed Strings: Complete the solution so that it reverses the string passed into it.
function solution(str){
    if (str === "")
        return "";
    else
      return solution(str.substr(1)) + str.charAt(0);
  }

//8 kyu: 3/21/22- Return Negative: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  // Code?
 if (num <= 0) {
   return num;
 }else{
   return -Math.abs(num)
 }
}