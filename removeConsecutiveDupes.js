// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

function removeConsecutiveDuplicates(s){ // your perfect code...

    let str = s.split(' ')
    let unique = []
    for(let i = 0; i < str.length; i++){
      let prev = str[i - 1]
      let curr = str[i]
      if(prev !== curr){
  //       console.log(curr + 'is a dupe')
        unique.push(curr)
      }
    }
    return unique.join(' ')
  }