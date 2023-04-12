function largest(n, array) {
    return n === 0 ? [] : array.sort((a,b) => a-b).slice(-n)
}