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