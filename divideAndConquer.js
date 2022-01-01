// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.


function divCon(x){
 
    
  
    let intArr = x.filter(x => x !== String(x))
    let strArr = x.filter(x => x !== Number(x))
    let intTotal = intArr.reduce((a,b) => a + b, 0)
    let strTotal = strArr.map(x => parseInt(x)).reduce((a,b) => a + b, 0)
    return intTotal - strTotal
    
  }