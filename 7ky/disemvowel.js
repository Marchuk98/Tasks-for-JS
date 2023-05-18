function disemvowel(str) {
    let vewols = ["a", "e", "i", "o", "u"];
    let result = ''
    let originalCase = '';

    for(let char of str){
        let chars = char.toLowerCase()
        if(!vewols.includes(chars)){
            result += char
            originalCase += char
        }else{
            originalCase += chars
        }
    }
    return result;
}