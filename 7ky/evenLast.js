function evenLast(numbers) {

    let result = 0;
    let lastEven = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 === 0) {
            result += numbers[i];
            lastEven = numbers[numbers.length - 1];
        }
    }

    return result * lastEven;
}