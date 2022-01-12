// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).


function insertDash(num) {
    //code me
   let strNum = num.toString()
   let arrStrNum = strNum.split('')
   let result = []
   for(let i = 1; i < arrStrNum.length; i++){
     let prev = parseInt(arrStrNum[i -1])
     let curr = parseInt(arrStrNum[i])
     result.push(arrStrNum[i-1])
     if(prev % 2 !== 0 && curr % 2 !== 0){
       result.push('-')
       
     }
   }
   result.push(arrStrNum[arrStrNum.length - 1])
   return result.join('')
 }