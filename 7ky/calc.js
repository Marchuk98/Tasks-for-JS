function calc(x){
    const total1 = x.split('').map(char => char.charCodeAt(0)).join('');
    const total2 = total1.replace(/7/g, '1');

    const sumTotal1 = [...total1].reduce((sum, digit) => sum + parseInt(digit), 0);
    const sumTotal2 = [...total2].reduce((sum, digit) => sum + parseInt(digit), 0);

    return sumTotal1 - sumTotal2;
}