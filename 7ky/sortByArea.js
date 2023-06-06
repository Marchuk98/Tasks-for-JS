function sortByArea(array) {
    return array.sort((a, b) => {
        const calculateArea = (element) => {
            if (Array.isArray(element)) {
                return element[0] * element[1];
            } else {
                return Math.PI * Math.pow(element, 2);
            }
        };

        return calculateArea(a) - calculateArea(b);
    })
}
