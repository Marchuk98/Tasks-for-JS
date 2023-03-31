function sumOfIntegersInString(s) {
    let str = s.match(/\d+/g)
    if (str === null) {
        return 0
    }
    let result = 0
    for (let i = 0; i < str.length; i++) {
        result += parseInt(str[i])
    }
    return result
}