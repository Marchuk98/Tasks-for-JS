var name = 'Abe';
var greet_abe = function(currentName) {
    return function() {
        return "Hello, " + currentName + '!';
    };
}(name);

name = 'Ben';
var greet_ben = function(currentName) {
    return function() {
        return "Hello, " + currentName + '!';
    };
}(name);