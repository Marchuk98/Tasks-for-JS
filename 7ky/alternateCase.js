function alternateCase(s) {
    var result = '';
    for (var i = 0; i < s.length; i++) {
        var char = s.charAt(i);
        if (char === char.toLowerCase()) {
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase();
        }
    }
    return result;
}