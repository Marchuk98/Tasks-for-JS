function findShort(s){

    let result = s.split(' ')

    let smallwords = result[0]

    for(let i = 0; i < result.length; i++){
        if(result[i].length < smallwords.length)
            smallwords = result[i]
        console.log(smallwords);
    }
    return smallwords.length

    //two solve

    // let sort = s.split(' ').sort((a,b) => a.length - b.length)
    // console.log(sort);
    // return sort[0].length

}