// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.



function repeats(arr){
    //..
      return arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)).reduce((a,b) => a + b)
      
    };
    
    // what is being passed in as an array?
    // are the inputs strictly numbers? 
    // any strings?
    // empty array?
    
    
    // returning sum of numbers that occur once
    
    // examples: repeats([4,5,7,5,4,8]) = 15 
    
    // filter method to sort out numbers that only occur once, than reduce method to get the sum of those numbers