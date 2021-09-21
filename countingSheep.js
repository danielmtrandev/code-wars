// Counting Sheep

function countSheeps(arrayOfSheep) {
    let presentSheep = 0;
    for(let i = 0; i < arrayOfSheep.length; i++){
      if(arrayOfSheep[i] === true){
        presentSheep += 1
      }
    }
    return presentSheep;
  }