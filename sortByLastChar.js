// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.


// P: string of words only
// R: array of those words, sorted alphabetically by final character of each word
// E: 'man i need a taxi up to ubud , ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// P: split() string, iterate through each word, target index of last letter of each word, sort based last letter

function last(x){

    return x.split(' ').sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
  //   console.log(str)
  }