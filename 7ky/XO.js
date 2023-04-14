function XO(str) {

    let strX = ''
    let strO = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            strX++
        }
        if (str[i].toLowerCase() === 'o') {
            strO++
        }
    }

    return strX === strO

}