// Create a function called shortcut to remove all the lowercase vowels in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

// Don't worry about uppercase vowels.


function shortcut(string){
    let vowels = ['a','e','i','o','u']
    let arr = string.split('')
    return arr.filter(x => !vowels.includes(x)).join('')
  }