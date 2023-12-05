function repeats(arr){
    const count = {};

    arr.forEach((num) => {
        count[num] = (count[num] || 0) + 1;
    });

    let sum = 0;
    for (const num in count) {
        if (count.hasOwnProperty(num) && count[num] === 1) {
            sum += parseInt(num, 10);
        }
    }

    return sum;
};