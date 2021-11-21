// is it a Palindrome?

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let pali = x.split('').reverse().join('')
    if(pali === x){
      return true
    }
    else{
      return false
    }
  }

// P: does the string contain any unusual characters? numbers? is it empty?
// R: we are returning true if the string is a palindrome and false if it is not
// E: "racecar" is a palindrome because it is spelled the same backwards / "chicken" is not a palindrome because it is not spell the same backwards
// P: I would start by splitting the string by each character using split('')
//    then I would use the reverse method to reverse the position of each element in the array
//    then I would use the join method to join each individual character together 
//    once I have the reversed word, I would set up a conditional to compare the original string and our reversed string
//    if the string is a palindrome, we would return true, if it is not, we will return false