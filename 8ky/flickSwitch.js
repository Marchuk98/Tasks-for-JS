function flickSwitch(arr){
    let switchFlag = true;
    let result = [];

    for (let item of arr) {
        if (item === 'flick') {
            switchFlag = !switchFlag;
        }
        result.push(switchFlag);
    }

    return result;
}