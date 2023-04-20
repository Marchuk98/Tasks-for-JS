function sumNoDuplicates(numList) {

    let result = 0;

    for(let i = 0; i < numList.length; i++){
        if(numList.indexOf(numList[i]) === numList.lastIndexOf(numList[i])){
            result += numList[i]
        }
    }
    return result
}