function well(x){
    let result = 0


    for(let i =0 ; i < x.length; i++){
        if(x[i] === 'good'){
            result++
        }
    }

    if(result >= 3){
        return 'I smell a series!';
    }else if(result >= 1){
        return 'Publish!';
    }else{
        return 'Fail!'
    }
}