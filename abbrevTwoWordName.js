// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let splitName = name.split(' ')
    let abbrevName = splitName[0].charAt(0) + '.' + splitName[1].charAt(0)
    let capitalName = abbrevName.toUpperCase()
    return capitalName
}