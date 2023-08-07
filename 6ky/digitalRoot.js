function digitalRoot(n) {
    while(n > 9) {
        n = n.toString().split('').reduce((acc, d) => acc + parseInt(d), 0);
    }
    return n;
}