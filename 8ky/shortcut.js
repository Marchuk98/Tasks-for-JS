function shortcut (string) {

    let result = ''

    for(let i = 0; i < string.length; i++){
        let letter = string[i]
        if(!"aeiou".includes(letter)){
            result += letter
        }
    }
    return result
}