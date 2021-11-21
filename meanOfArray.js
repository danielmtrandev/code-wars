// Get the mean of an array

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
  let addMarks = marks.reduce((a, b) => a + b) 
  let avg = addMarks / marks.length
  return Math.floor(avg)
}


// can the input be a negative number? 
// will it always be an array? 
// will elements in array always be numbers?

// examples: [2,2,2,2], = 2 is average

// return average rounded down to nearest integer

// 