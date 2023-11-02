function solve(arr){
    let numPresence = {};
    arr.forEach(num => {
        if (numPresence[-num]) {
            delete numPresence[-num];
        } else {
            numPresence[num] = true;
        }
    });
    return parseInt(Object.keys(numPresence)[0]);
};