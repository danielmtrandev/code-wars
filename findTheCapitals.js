// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );



var capitals = function (word) {
    // Write your code here
    let letterIndices = []
    let arrStr = word.split('')
    let arrCap = arrStr.filter(x => x === x.toUpperCase())
    for(let i = 0; i < arrStr.length; i++){
      if(arrCap.includes(arrStr[i])){
        letterIndices.push(arrStr.indexOf(arrStr[i]))
      }
    }
    
  //   arrStr.forEach(x => letterIndices.push(arrStr.indexOf(x)))
    
    
    return letterIndices
    
  };