function well(x){
    let good = 0;
    let bad = 0;
    for(let i = 0; i < x.length; i++){
      if(x[i] === 'good'){
        good++
      }
      else if(x[i] === 'bad'){
        bad++
      }
    }
    if(good >= 1 && good <= 2){
      return 'Publish!'
    }
    else if(good > 2){
      return 'I smell a series!'
    }
    else{
      return 'Fail!'
    }
  }