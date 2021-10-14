// is it a Palindrome?

function isPalindrome(x) {
    let originalStr = x.toLowerCase()
    let pali = x.split('').reverse().join('').toLowerCase()
    if(pali === originalStr){
      return true
    }
    else{
      return false
    }
  }