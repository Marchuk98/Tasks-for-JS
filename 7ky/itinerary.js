function itinerary(travel) {
    const uniqueAirports = [];

    for (const leg of travel) {
        if (!uniqueAirports.length || uniqueAirports[uniqueAirports.length - 1] !== leg.in) {
            uniqueAirports.push(leg.in);
        }
        uniqueAirports.push(leg.out);
    }

    return uniqueAirports.join('-');
}