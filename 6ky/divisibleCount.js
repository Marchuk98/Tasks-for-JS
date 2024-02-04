function divisibleCount(x, y, k) {
    const start = x % k === 0 ? x : x + (k - (x % k));
    const count = Math.floor((y - start) / k) + 1;
    return count;
}
