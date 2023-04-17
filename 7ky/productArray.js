function productArray(numbers){

    let result = [];
    let multiply = 1;
    for(let i = 0; i < numbers.length; i++){
        multiply *= numbers[i];
    }
    for(let i = 0; i < numbers.length; i++){
        result.push(multiply / numbers[i]);
    }
    return result
}