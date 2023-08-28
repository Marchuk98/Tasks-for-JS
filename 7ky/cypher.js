function cypher(string) {
    const dictionary = {
        "I": "1",
        "R": "2",
        "E": "3",
        "A": "4",
        "S": "5",
        "G": "6",
        "T": "7",
        "B": "8",
        "O": "0",
        "l": "1",
        "z": "2",
        "e": "3",
        "a": "4",
        "s": "5",
        "b": "6",
        "t": "7",
        "g": "8",
        "o": "0",
    };

    let cypheredString = "";

    for (let i = 0; i < string.length; i++) {
        if (dictionary[string[i]]) {
            cypheredString += dictionary[string[i]];
        } else {
            cypheredString += string[i];
        }
    }

    return cypheredString;
}