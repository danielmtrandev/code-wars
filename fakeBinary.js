// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    let strArray = x.split('')
    let numArray = strArray.map(item => Number(item))
    let binary = []
    for(let i = 0; i < numArray.length; i++){
      if(numArray[i] < 5){
        binary.push('0')
      }
      else if(numArray[i] >= 5){
        binary.push('1')
      }
    }
    return binary.join('')
  }
  
  
  // PARAMETERS:
  // taking in a string of digits, will this always be a string, will the string of digits have negative numbers?
  
  // RETURN:
  // returning a string with a combination of digits consisting of '0' and '1'
  
  // EXAMPLE:
  // ORIGINAL STRING = '45385593107843568' >>> '01011110001100111'
  
  // PSEUDO: 
  // split.(' '), 
  // Number() / parseInt(), 
  // set up empty array, 
  // set up a conditional for x < 5 & x >= 5, 
  // push results into the empty array
  // join('') on declared empty array