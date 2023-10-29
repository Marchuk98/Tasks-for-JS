function ageInDays(year, month, day){

    let birthDate = new Date(year, month - 1, day);


    let today = new Date();

    today.setHours(0, 0, 0, 0);

    let differenceInMillis = today - birthDate;

    let daysOld = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24));

    return `You are ${daysOld} days old`;

}