// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.

// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"



// P: string of words with a vowel missing
// R: index of vowel missing from string
// E: ("John Doe hs seven red pples under his bsket"), 0);
// P: 


function absentVowel(x){
  let vowels = ['a', 'e', 'i', 'o', 'u']
  
//   return vowels.filter((v,i,a) => !x.includes(v) ? i : false)
  let missing = vowels.filter((v,i,a) => !x.includes(v))
  return vowels.indexOf(missing[0])
}

// OR

function absentVowel(x){
    let vowels = ['a','e','i','o','u']
    let sentence = x.split('')
    for(let i = 0; i < vowels.length; i++){
      if(!sentence.includes(vowels[i])){
        return i 
      }
    }
  }