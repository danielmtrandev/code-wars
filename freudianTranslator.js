// Freudian Translator

function toFreud(string) {
    if(string === ''){
      return ''
    }
    else{
      let result = string.split(' ').map(x => x = 'sex').join(' ')
      return result;
    }
}