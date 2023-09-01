function bloodAlcoholContent(drinks, weight, sex, time) {
    const r = (sex === 'male') ? 0.73 : 0.66;
    const A = drinks.ounces * drinks.abv;
    const BAC = (A * 5.14 / weight * r) - 0.015 * time;
    return Math.max(0, BAC.toFixed(4));
}