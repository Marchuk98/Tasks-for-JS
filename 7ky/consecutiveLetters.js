function solve(s){
    const chars = [...s].sort();

    for(let i = 0; i < chars.length - 1; i++) {
        if (chars[i] === chars[i + 1]) return false;

        if (chars[i].charCodeAt(0) + 1 !== chars[i + 1].charCodeAt(0)) return false;
    }
    return true;
}