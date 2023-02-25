var humanYearsCatYearsDogYears = function(humanYears) {

    let catAge, dogAge
    if (humanYears === 1) {
        catAge = 15;
        dogAge = 15;
    }
    else if (humanYears === 2) {
        catAge = 15 + 9;
        dogAge = 15 + 9;
    }
    else {
        catAge = (15 + 9 + (4 * (humanYears - 2)));
        dogAge = (15 + 9 + (5 * (humanYears - 2)));
    }
    return [humanYears,catAge,dogAge]

}