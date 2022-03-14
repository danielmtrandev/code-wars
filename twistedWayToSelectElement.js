// You have two arrays: arrSearch and arrTake. arrSearch has to be sorted in reverse alphabetical order. Now, from arrSearch extract the third element, and from that element select the third letter. If the letter you selected matches the first letter of one or more elements of arrTake, return the first element that starts with the respective letter. If there is no element to match in the second array then return 'Nothing here'.


function select (arrSearch, arrTake){
    let arrReverse = arrSearch.sort().reverse().splice(2,1).shift().split('')
    return arrTake.some(word => word[0] == arrReverse[2]) ? arrTake.filter(word => word[0] == arrReverse[2]).shift() : 'Nothing here'
  
  }