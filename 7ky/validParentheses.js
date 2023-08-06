function validParentheses(parenStr) {
    const stack = [];

    for (let char of parenStr) {
        if (char === '(') {
            stack.push('(');
        } else if (char === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}