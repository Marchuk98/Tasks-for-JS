function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    const squaredAges = [age1, age2, age3, age4, age5, age6, age7, age8].map(age => age * age);
    const sumOfSquaredAges = squaredAges.reduce((sum, age) => sum + age, 0);
    const squareRoot = Math.sqrt(sumOfSquaredAges);
    const predictedAge = Math.floor(squareRoot / 2);
    return predictedAge;
}