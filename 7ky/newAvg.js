function newAvg(arr, newavg) {
    const currentSum = arr.reduce((acc, val) => acc + val, 0);
    const targetSum = newavg * (arr.length + 1);
    const nextDonation = Math.ceil(targetSum - currentSum);

    if (nextDonation <= 0) {
        throw new Error("Expected New Average is too low");
    }

    return nextDonation;
}