function convertHashToArray(hash){
    return Object.keys(hash)
        .sort()
        .map(key => [key, hash[key]]);
}