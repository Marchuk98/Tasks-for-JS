function twoSum(numbers, target) {
    const numIndicesMap = {};

    for (let i = 0; i < numbers.length; i++) {
        const currentNum = numbers[i];
        const complement = target - currentNum;

        if (numIndicesMap[complement] !== undefined) {

            return [numIndicesMap[complement], i];
        }
        numIndicesMap[currentNum] = i;
    }
    return [];
}