// Get the mean of an array

function getAverage(marks){
    let addMarks = marks.reduce((a, b) => a + b) 
    let avg = addMarks / marks.length
    return Math.floor(avg)
  }