var number = function(busStops){
    let totalPeople = 0;

    for (const stop of busStops) {
        totalPeople += stop[0];
        totalPeople -= stop[1];
    }

    return totalPeople;
}