function compress(sentence) {
    let words = sentence.toLowerCase().split(" ");
    let positions = {};
    let result = "";
    for (let i = 0; i < words.length; i++) {
        if (!(words[i] in positions)) {
            positions[words[i]] = Object.keys(positions).length;
        }
        result += positions[words[i]];
    }
    return result;
}