function maxGap (numbers){

    var gaps = []

    const result = numbers.sort((a,b)=> a-b)

    for(let i = 0; i < result.length-1; i++){
        if(result[i] < result[i+1]) gaps.push(result[i+1]-result[i])
    }
    if(gaps.length === 0){
        return 0
    }
    return gaps.reduce((acc,cur)=> Math.max(acc,cur))

}