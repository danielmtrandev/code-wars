// Reversed Strings

// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


function solution(str){
  let newStr = str.split('')
  let reverse = []
  for(let i = newStr.length - 1; i >= 0; i--){
    reverse.push(newStr[i])
  }
  return reverse.join('')
}

// OR

function solution(str){
  return str.split('').reverse().join('')
}