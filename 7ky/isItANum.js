function isItANum(str) {

    let string = '';
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(parseInt(str[i]) && str[i] !== '')) {
            string += str[i]
        }
    }
    if (string.length === 11 && string[0] === 0) {
        return string
    } else {
        return "Not a phone number"
    }
}

//"S:)0207ERGQREG88349F82!efRF)"