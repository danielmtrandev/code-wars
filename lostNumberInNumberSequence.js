// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).




// P: One array of ordered sequence of numbers from 1 to N and a second array of the same numbers but mixed + missing a number
// R: return missing number from original array
// E: [1,2,3,4,5], [3,4,1,5]), = 2
// P: filter


function findDeletedNumber(arr, mixArr) {
    // your code
    let deleted = arr.filter(x => !mixArr.includes(x))
    return deleted.length == 0 ? 0 : deleted[0]
  }