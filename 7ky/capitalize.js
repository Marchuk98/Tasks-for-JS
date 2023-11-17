function capitalize(s){
    let evenResult = '';
    let oddResult = '';

    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            evenResult += s[i].toUpperCase();
            oddResult += s[i];
        } else {
            evenResult += s[i];
            oddResult += s[i].toUpperCase();
        }
    }

    return [evenResult, oddResult];
};