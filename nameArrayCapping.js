// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']


function capMe(names) {
    let arrCap = names.map(x => x.toLowerCase().split(''))
    for(let i = 0; i < arrCap.length; i++){
      for(let j = 0; j < arrCap.length; j++){
        arrCap[j][0] = arrCap[j][0].toUpperCase()
      }
    }
    return arrCap.map(x => x.join(''))
    
    
  }