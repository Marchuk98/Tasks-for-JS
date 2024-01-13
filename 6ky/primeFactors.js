function primeFactors(n){
    let result = '';
    for (let i = 2; i <= n; i++) {
        let count = 0;
        while (n % i === 0) {
            n /= i;
            count++;
        }
        if (count > 0) {
            result += `(${i}`;
            if (count > 1) {
                result += `**${count}`;
            }
            result += ')';
        }
    }
    return result;
}