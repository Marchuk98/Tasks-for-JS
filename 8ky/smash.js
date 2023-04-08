function smash (words) {

    let result = ""

    for(let i = 0; i < words.length; i++){
        result +=  words[i] + " "
    }
    return result.trim()
}