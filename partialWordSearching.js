// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

// Examples
// If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].


function wordSearch(query, seq){
    //  create empty array to hold matching elements
        let newArr = []
    //  loop through array "seq", which holds strings to match against
        for(let i = 0; i < seq.length; i++){
    //    lower case all elements (strings) of array to bypass case-sensitivity and assign to more readable variable
          let newSeq = seq[i].toLowerCase()
    //    conditional to check if each string matches the query
          if(newSeq.includes(query.toLowerCase())){
            newArr.push(seq[i])
          }
        }
    //  after loop is ran, conditional to check if there are no match elements, if none, return array with string named'empty'
        if(newArr.length === 0){
          newArr = ['Empty']
        }
    //  returns array after loop + conditional is read
        return newArr
      }