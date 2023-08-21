function cookPancakes(n, m) {
    const fullBatches = Math.floor(n / m);
    const remainingPancakes = n % m;

    const totalTime = (fullBatches * 2) + (remainingPancakes > 0 ? 2 : 0);

    return totalTime;
}