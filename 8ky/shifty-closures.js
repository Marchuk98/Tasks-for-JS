var name = 'Abe';
var greet_abe = function() {
    var capturedName = name;
    return function() {
        return "Hello, " + capturedName + '!';
    }
}();
name = 'Ben';
var greet_ben = function() {
    var capturedName = name;
    return function() {
        return "Hello, " + capturedName + '!';
    }
}();