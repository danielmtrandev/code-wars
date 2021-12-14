// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].



// P: array of whole numbers, in any order / baby ages < 1 year will = 0
// R: return array of whole numbers, with youngest age, oldest age, and difference between them
// E: [82, 15, 6, 38, 35] = [6, 82, 76]
// P: sort(), iterate through array, filter()



function differenceInAges(ages){
    let sortedAges = ages.sort((a,b) => a - b)
    let youngestOldestDiff = []
    
    youngestOldestDiff.push(sortedAges[0])
    youngestOldestDiff.push(sortedAges[sortedAges.length-1])
    
    if(youngestOldestDiff[0] < 1){
      youngestOldestDiff[0] = 0
      let diff = youngestOldestDiff[youngestOldestDiff.length - 1] - youngestOldestDiff[0]
      youngestOldestDiff.push(diff)
    }
    else{
      let diff = youngestOldestDiff[youngestOldestDiff.length - 1] - youngestOldestDiff[0]
      youngestOldestDiff.push(diff)
    }
    return youngestOldestDiff
  }