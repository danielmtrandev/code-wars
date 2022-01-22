// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.




function accum(s) {
    // your code
    let str = s.split('').map(x => x.toLowerCase())
    let arr = []
    for(let i = 0; i < str.length; i++){
      let repeat = str[i].repeat(i+1).split('')
      arr.push(repeat)
    }
  //   console.log(arr)
    
    return arr.map((x,i) => x[i][0].toUpperCase() + x[i].repeat(i)).join('-')
  //   console.log(arr.map(x => x.join('')).join('-'))
    
    
  }