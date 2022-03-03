// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


// P: array of numbers
// R: array of same numbers, but with odd numbers sorted in ascending order and even numbers left at their original index
// E: 
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// P: create new array, push odd nums into new array then sort, then push

function sortArray(array) {
    // Return a sorted array.
    let odds = array.filter(x => x % 2 !== 0).sort((a,b) => a - b)
    
    return array.map(x => x % 2 == 0 ? x : odds.shift())
    
  }