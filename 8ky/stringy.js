function stringy(size) {
    let result = '';
    for (let i = 1; i <= size; i++) {

        result += i % 2 === 0 ? '0' : '1';
    }
    return result;
}