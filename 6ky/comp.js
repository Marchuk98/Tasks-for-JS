function comp(array1, array2){
    if (!array1 || !array2) return false;

    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);

    return array1.every((element, index) => element * element === array2[index]);
}