function split(arr, prop) {
    var truthy = [];
    var falsey = [];

    arr.forEach(function (obj) {
        if (obj[prop]) {
            truthy.push(obj);
        } else {
            falsey.push(obj);
        }
    });

    return [truthy, falsey];
}