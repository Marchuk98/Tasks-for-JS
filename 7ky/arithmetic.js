function arithmetic(a, b, operator){
    const operators = {
        "add": (a, b) => a + b,
        "subtract": (a, b) => a - b,
        "multiply": (a, b) => a * b,
        "divide": (a, b) => a / b
    }
    if (operators.hasOwnProperty(operator)) {
        return operators[operator](a, b)
    } else {
        throw new Error("Invalid operator: " + operator)
    }
}