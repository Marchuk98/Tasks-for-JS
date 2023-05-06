function getCount(str) {
    let result = 0
    let arr = ["a", "e", "i", "o", "u"];
    for(let i = 0; i < str.length; i++){
        if(arr.includes(str[i])){
            result++
        }
    }
    return result
}