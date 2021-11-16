function array(arr){
    const words = arr.split(',')
      words.shift()
      words.pop()
      return words.length ? words.join(' ') : null
    }