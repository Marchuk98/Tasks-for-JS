var findAverage = function (nums) {
    if (nums.length === 0) {
        return "List is empty";
    }
    var sum = nums.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    var mean = sum / nums.length;

    return mean;
}