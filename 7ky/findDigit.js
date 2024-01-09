let findDigit = function(num, nth){
    if(nth <= 0)
        return -1;

    let x = Math.abs(num);
    for (let i=1; i < nth; i++){
        x = Math.floor(x/10);
    }
    return x%10;
}