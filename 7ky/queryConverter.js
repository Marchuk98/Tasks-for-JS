var solution = (str) => {
    var paramsArray = str.slice(str.indexOf('?') + 1).split('&');

    var result = {};

    for (var i = 0; i < paramsArray.length; i++) {
        var param = paramsArray[i].split('=');

        result[param[0]] = param[1];
    }

    return result;

}