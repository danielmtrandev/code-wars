
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    // your code here
    let arrSum = 0
    for(i = 0; i < array.length; i++){
      arrSum = arrSum + array[i]
    }
    
    let average = arrSum / array.length
    if(array.length == 0){
      return 0
    }
    else{
      return average
    }
  }