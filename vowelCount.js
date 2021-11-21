// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    var vowelsCount = 0;
    let newStr = str.split("")
    console.log(newStr)
    for(let i = 0;i < newStr.length; i++){
      if(newStr[i] === 'a' || newStr[i] === 'e' || newStr[i] === 'i' || newStr[i] === 'o' || newStr[i] === 'u'){
         vowelsCount++
         }
    }
    // enter your majic here
    
    return vowelsCount;
  }
  
  // Parameters: string, is it all lower case? / includes numbers or special characters? / empty string?
  // Return: return number of vowels from string
  // Example: "rocketship", 3
  // Pseudocode: split string into an array / iterate through array with forloop for each letter element 
  // create conditional that compares current element to "a" "e" "i" "o" "u"
  // if element matches any of the compared strings, increment vowelsCount++
  // return vowelsCount