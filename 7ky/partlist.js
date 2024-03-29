function partlist(arr) {
    if (arr.length < 2) {
        return [];
    }

    const result = [];
    for (let i = 1; i < arr.length; i++) {
        const firstPart = arr.slice(0, i).join(' ');
        const secondPart = arr.slice(i).join(' ');
        result.push([firstPart, secondPart]);
    }

    return result;
}