function makeValley(arr) {
    arr.sort((a, b) => b - a);

    let leftWing = [];
    let rightWing = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            leftWing.push(arr[i]);
        } else {
            rightWing.unshift(arr[i]);
        }
    }
    const result = leftWing.concat(rightWing);

    return result;
}