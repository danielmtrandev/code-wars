// Reversed Strings

function solution(str){
    splitStr = str.split("")
    reverseSplit = splitStr.reverse()
    joinSplit = reverseSplit.join("")
    return joinSplit
  }