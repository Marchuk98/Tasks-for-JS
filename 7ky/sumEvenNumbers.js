function sumEvenNumbers(input) {
    return input.reduce((acc, сur) => сur % 2 === 0 ? acc +  сur : acc, 0)
}