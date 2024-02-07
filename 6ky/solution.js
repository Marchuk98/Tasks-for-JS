function solution(str){
    const pairs = [];
    for (let i = 0; i < str.length; i += 2) {
        pairs.push(str.slice(i, i + 2));
    }
    if (pairs.length > 0 && pairs[pairs.length - 1].length === 1) {
        pairs[pairs.length - 1] += '_';
    }
    return pairs;
}