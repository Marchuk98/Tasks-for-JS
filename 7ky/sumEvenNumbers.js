function sumEvenNumbers(input) {

    return input.reduce((acc, cur) => cur % 2 === 0 ? acc + cur : acc, 0)

}