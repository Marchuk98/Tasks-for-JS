function solve(arr) {
    var result = [];
    var map = {};

    for (var i = arr.length - 1; i >= 0; i--) {
        var num = arr[i];
        if (!map[num]) {
            result.unshift(num);
            map[num] = true;
        }
    }

    return result;
}