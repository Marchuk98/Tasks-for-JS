function climb(n){
    if(n === 1){
        return [1]
    }else{
        let previous
        if(n %2 === 0){
            previous = n / 2
        }else{
            previous = (n-1) / 2
        }
        const sequence = climb(previous)
        sequence.push(n);

        return sequence
    }
}