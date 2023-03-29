function divCon(x) {

    let numberCount = 0;
    let stringCount = 0;

    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === 'number') {
            numberCount += x[i]
        } else if (typeof x[i] === 'string') {
            stringCount += parseInt(x[i])
        }
    }
    return numberCount - stringCount
}