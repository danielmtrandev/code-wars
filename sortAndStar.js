// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


function twoSort(s) {
    return s.sort().shift().split('').join('***')
    
  }
  
  
  //Params -
    //start w/string 
    //sort alpha - can this also numbers? Can it be null or undefined?
    // ASCII - all char, nums, letters
    //need first value - has to be a string, and between each letter has "***"
  //Return -
    // a string, between each letter ***
  //Example -
    // ["orange", "apple", "banana"] - "apple" - "a***p***p***l**e"
  //Pseudo -
    // sort so it can be alphabetical
    //find first string
    //return the string with ** in letter, split my string the rejoin my string to invlude the **