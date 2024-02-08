function dataReverse(data) {
    let reversedData = [];
    for (let i = 0; i < data.length; i += 8) {
        let segment = data.slice(i, i + 8);
        reversedData.unshift(...segment);
    }
    return reversedData;
}