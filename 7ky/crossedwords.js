function crossedwords(str1,str2){
    const commonLetter = Array.from(str1).find(char => str2.includes(char));

    const index1 = str1.indexOf(commonLetter);
    const index2 = str2.indexOf(commonLetter);

    let result = "";
    for (let i = 0; i < str2.length; i++) {
        if (i === index2) {
            result += str1 + "\n";
        } else {
            result += " ".repeat(index1) + str2[i] + " ".repeat(str1.length - index1 - 1) + "\n";
        }
    }

    return result;
}