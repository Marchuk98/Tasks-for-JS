function candies(kids){
    if (kids.length <= 1) {
        return -1;
    }

    let maxCandies = Math.max(...kids);
    let totalCandiesGiven = 0;

    for (let kid of kids) {
        totalCandiesGiven += maxCandies - kid;
    }

    return totalCandiesGiven;
}