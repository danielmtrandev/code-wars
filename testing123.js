// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]


var number=function(array){
    //your awesome code here
    if(array.length === 0){
      return []
    }
    else{
      let newArr = []
      for(let [index,value] of array.entries()){
  //       console.log(index,value)
        newArr.push([index + 1, value])
        
      }
      let str = newArr.map(x => x.join(': '))
      return str
    }
  }