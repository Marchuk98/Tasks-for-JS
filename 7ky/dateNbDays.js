function dateNbDays(a0, a, p) {
    const startDate = new Date("2016-01-01");
    let currentDate = startDate;
    let currentAmount = a0;
    let days = 0;

    while (currentAmount < a) {
        const dailyInterest = currentAmount * (p / 36000);
        currentAmount += dailyInterest;
        days++;
        currentDate.setDate(currentDate.getDate() + 1);
    }

    const formattedDate = currentDate.toISOString().split("T")[0];
    return formattedDate;
}