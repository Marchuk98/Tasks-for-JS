function fakeBin(x){
    let result = [];

    for(let i = 0; i < x.length; i++){
        if(x[i] < 5){
            result.push(x[i] = 0);
        }else if(x[i] >= 5){
            result.push(x[i] = 1 )
        }
    }
    return result.join('')
}


function fakeBin(x){

    let result = [];

    for(let i = 0; i < x.length; i++){
        result.push(x[i] < '5' ? '0':'1')
    }
    return result.join('')
}