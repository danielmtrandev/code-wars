// Array plus array

function arrayPlusArray(arr1, arr2) {
    let arr3 = arr1.concat(arr2)
    console.log(arr3)
    return arr3.reduce(function (accumulator, current) {
      return accumulator + current;
  });
    
  }