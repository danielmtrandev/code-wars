// Abbreviate a Two Word Name
function abbrevName(name){
    let splitName = name.split(' ')
    let abbrevName = splitName[0].charAt(0) + '.' + splitName[1].charAt(0)
    let capitalName = abbrevName.toUpperCase()
    return capitalName
}