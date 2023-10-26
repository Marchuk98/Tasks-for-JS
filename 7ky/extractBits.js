function extractBits(field, offset, length) {
    field = BigInt(field);
    offset = BigInt(offset);
    length = BigInt(length);

    let shiftedNumber = field >> offset;

    let mask = (1n << length) - 1n;

    return shiftedNumber & mask;
}
