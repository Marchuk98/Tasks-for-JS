function digitize(n) {

    if (typeof n !== 'number') {
        return 'Argument must be a number';
    }
    let arr = String(n).split('').reverse().map(Number);

    return arr;
}


