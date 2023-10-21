function pofi(n){
    switch (n % 4) {
        case 1:
            return 'i';
        case 2:
            return '-1';
        case 3:
            return '-i';
        default:
            return '1';
    }
}