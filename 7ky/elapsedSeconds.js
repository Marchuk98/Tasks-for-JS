function elapsedSeconds(startDate, endDate){
    var difference = endDate.getTime() - startDate.getTime();
    return difference / 1000;
}