function converter (mpg) {
    const milesToKilometers = 1.609344;
    const gallonsToLiters = 4.54609188;


    const kpl = (mpg * milesToKilometers) / gallonsToLiters;


    const roundedKpl = parseFloat(kpl.toFixed(2));

    return roundedKpl;
}