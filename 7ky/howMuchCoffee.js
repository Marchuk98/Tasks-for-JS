function howMuchCoffee(e) {
    let count=0;
    for (let i=0; i<e.length; ++i)
    {
        if (e[i]=='cw' || e[i]=='cat' || e[i]=='dog' || e[i]=='movie')
            count++;
        if (e[i]=='CW' || e[i]=='CAT' || e[i]=='DOG' || e[i]=='MOVIE')
            count+=2;
    }
    return count>3?'You need extra sleep':count;
}