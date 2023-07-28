function solution(a, b) {
    const shortStr = a.length < b.length ? a : b;
    const longStr = a.length < b.length ? b : a;

    return shortStr + longStr + shortStr;
}