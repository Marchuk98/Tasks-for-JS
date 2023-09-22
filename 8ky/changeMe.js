function changeMe(moneyIn){
    const validInputs = ["£5", "£2", "£1", "50p", "20p"];
    const changeValues = {
        "£5": 500,
        "£2": 200,
        "£1": 100,
        "50p": 50,
        "20p": 20
    };

    if (!validInputs.includes(moneyIn)) return moneyIn;

    let changeAmount = changeValues[moneyIn];
    let result = [];

    while (changeAmount > 0) {
        if (changeAmount < 20) {
            result.push("10p");
            changeAmount -= 10;
        } else {
            result.push("20p");
            changeAmount -= 20;
        }
    }

    return result.join(' ');
}