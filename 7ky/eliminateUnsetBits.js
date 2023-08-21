function eliminateUnsetBits(number) {
    let result = "";
    for (let i = 0; i < number.length; i++) {
        if (number[i] === "1") {
            result += number[i];
        }
    }
    return result === "" ? 0 : parseInt(result, 2);
}