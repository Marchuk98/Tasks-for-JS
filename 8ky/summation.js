var summation = function (num) {

    let result = []
    for(let i = 1; i <= num; i++){
        result.push(i)
    }
    return result.reduce((acc,cur)=> acc + cur,0)
}