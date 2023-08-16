function showBits (n) {
    const binaryArray = [];

    for (let i = 0; i < 32; i++) {
        binaryArray.unshift(n & 1);
        n >>= 1;
    }

    return binaryArray;
}