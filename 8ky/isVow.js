function isVow(a){
    for(let i = 0; i < a.length; i++){
        switch(a[i]){
            case 97:
                a[i] = 'a'
                break;

            case 117:
                a[i] = 'u'
                break;

            case 101:
                a[i] = 'e'
                break;
            case 105:
                a[i] = 'i'
                break;

            case 111:
                a[i] = 'o'
                break;
        }
    }
    return a
}