var fibsFizzBuzz = function(n) {
    const sequence = [1];

    // Generate Fibonacci sequence
    for (let i = 1; i < n; i++) {
        if (i === 1) {
            sequence.push(1);
        } else {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
    }
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] % 15 === 0) {
            sequence[i] = "FizzBuzz";
        } else if (sequence[i] % 3 === 0) {
            sequence[i] = "Fizz";
        } else if (sequence[i] % 5 === 0) {
            sequence[i] = "Buzz";
        }
    }

    return sequence;
};