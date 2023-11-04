function order(words){
    const wordArray = words.split(' ');

    const sortedArray = wordArray.sort((a, b) => {
        const numA = parseInt(a.match(/\d+/), 10);
        const numB = parseInt(b.match(/\d+/), 10);
        return numA - numB;
    });

    return sortedArray.join(' ');
}