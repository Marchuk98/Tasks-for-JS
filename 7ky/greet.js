var greet = function(name) {
    var capitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return "Hello " + capitalized + "!";
};