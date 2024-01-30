function squareUp(n)
{
    let result = [];

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            result.push(0);
        }
        for (let k = i; k >= 1; k--) {
            result.push(k);
        }
    }

    return result;
}