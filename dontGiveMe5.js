
// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!




function dontGiveMeFive(start, end)
{
//   create array that holds numbers between start and end values
  let arr = []

//   create loop to push all numbers between start and end values
//   uses 'start' as initial index value, 'end' + 1 as value for number of iterations
  for(let i = start; i < end + 1; i++){
//  converts index value, which is a number/integer, into a string. 
//  then push to arr
    arr.push(String(i))
    
  }
//   create an array filtered with only elements that do not include string '5'
//   return length of that array
  return arr.filter(x => !x.includes('5')).length
  
//   console.log(arr)
}