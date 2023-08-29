function rgbToGrayscale(color){

    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);

    let y = Math.round(0.299 * r + 0.587 * g + 0.114 * b);

    let hexY = y.toString(16).toUpperCase();
    if (hexY.length < 2) {
        hexY = "0" + hexY;
    }

    let grayscaleColor = "#" + hexY + hexY + hexY;

    return grayscaleColor;
}