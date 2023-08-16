function theVar(theVariables) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const [var1, var2] = theVariables.split('+');

    const value1 = alphabet.indexOf(var1) + 1;
    const value2 = alphabet.indexOf(var2) + 1;

    return value1 + value2;
}
