function testEven(n) {
    if (!Number.isInteger(n)) {
        return false
    }
    return n % 2 === 0
}