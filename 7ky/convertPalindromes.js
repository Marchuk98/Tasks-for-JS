function convertPalindromes(numbers) {

    let result = []

    for (let i = 0; i < numbers.length; i++) {
        const pal = numbers[i].toString().split('').reverse().join('')
        if (numbers[i].toString() === pal) {
            result.push(1)
        } else {
            result.push(0)
        }
    }
    return result
}