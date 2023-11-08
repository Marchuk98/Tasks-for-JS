function descendingOrder(n){
    let digits = n.toString().split('');
    let sortedDigits = digits.sort(function(a, b) { return b - a; });
    return parseInt(sortedDigits.join(''), 10);
}