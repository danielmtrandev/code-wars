// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
    const count = {
      'x': 0,
      'o': 0,
    }
    
    let check_str = str.split('')
    for(let i = 0; i < check_str.length; i++){
      if(check_str[i].toLowerCase() === 'x'){
        count['x']++
      }
      else if(check_str[i].toLowerCase() === 'o'){
        count['o']++
      }
      else{
        continue
      }
    }
    return count.x === count.o ? true : false
    
  }