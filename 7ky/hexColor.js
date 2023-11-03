function hexColor(codes){
    if (!codes || codes === '000 000 000') {
        return 'black';
    }
    let [red, green, blue] = codes.split(' ').map(num => parseInt(num, 10));
    if (red === green && green === blue) {
        return 'white';
    } else if (red > green && red > blue) {
        return 'red';
    } else if (green > red && green > blue) {
        return 'green';
    } else if (blue > red && blue > green) {
        return 'blue';
    } else if (red === green && red > blue) {
        return 'yellow';
    } else if (red === blue && red > green) {
        return 'magenta';
    } else if (green === blue && green > red) {
        return 'cyan';
    }
}