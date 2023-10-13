function factors(integer, limit){
    return integer >= limit ? Array.from({length: integer}, (_, i) => i + 1).filter(n => integer % n === 0 && n >= limit) : [];
}
