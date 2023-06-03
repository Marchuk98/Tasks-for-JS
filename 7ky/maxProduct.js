function maxProduct(a) {
    let largest = 0;
    let secondLargest = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > largest) {
            secondLargest = largest;
            largest = a[i];
        } else if (a[i] > secondLargest) {
            secondLargest = a[i];
        }
    }

    return largest * secondLargest;
}