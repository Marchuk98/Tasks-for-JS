function minValue(values){
    const uniqueValues = Array.from(new Set(values));


    uniqueValues.sort((a, b) => a - b);


    const result = parseInt(uniqueValues.join(''));

    return result;
}