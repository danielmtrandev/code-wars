// Beginner - Lost Without a Map

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    let newX = []
    for(let i = 0; i < x.length; i++){
      let doubleX = x[i] * 2
      newX.push(doubleX)
    }
    return newX
  }