// Basic Math Operations

function basicOp(operation, value1, value2)
{ 
  // Code
  if(operation === '+'){
    let sum = value1 + value2
    return sum
  }
  else if(operation === '-'){
    let difference = value1 - value2
    return difference
  }
  else if(operation === '*'){
    let product = value1 * value2
    return product
  }
  if(operation === '/'){
    let dividend = value1 / value2
    return dividend
  }
}