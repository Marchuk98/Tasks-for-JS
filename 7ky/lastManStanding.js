function lastManStanding(n) {
    let nums = Array.from({length: n}, (_, i) => i + 1);
    while (nums.length > 1) {
        nums = nums.filter((_, i) => i % 2 !== 0); // remove even indexed nums
        if (nums.length === 1) break;
        nums.reverse();
        nums = nums.filter((_, i) => i % 2 !== 0); // remove even indexed nums
        nums.reverse();
    }
    return nums[0];
}