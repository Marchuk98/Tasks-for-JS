function incrementer(nums) {
    let result = []

    for (let i = 0; i < nums.length; i++) {
        result.push((nums[i] + 1 + i) % 10)
    }
    return result
}