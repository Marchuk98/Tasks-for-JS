function reverseMiddle(array) {

    if (array.length < 4) {
        throw new Error("Array must have at least four elements.");
    }

    const middleIndex = Math.floor(array.length / 2);
    let middleElements = [];

    if (array.length % 2 === 0) {
        middleElements = [array[middleIndex - 1], array[middleIndex]];
    }

    else {
        middleElements = [array[middleIndex - 1], array[middleIndex], array[middleIndex + 1]];
    }

    return middleElements.reverse();


}