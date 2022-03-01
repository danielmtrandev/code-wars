
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]



// P: list a (array), list b (array)
// R: return array of removed values from list 'a' that present in list 'b'
// E: arrayDiff([1,2],[1]) == [2]
// P: 

function arrayDiff(a, b) {
    //   console.log(arr)
      return a.length == 0 || b.length == 0 ? a : a.filter(x => !b.includes(x))
      
    }