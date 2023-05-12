var capitals = function (word) {

    let upper = []

    for(let i = 0; i < word.length; i++){

        let char = word.charAt(i)

        if(char === char.toUpperCase()){
            upper.push(i)
        }
    }
    return upper
}