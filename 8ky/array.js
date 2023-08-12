function array(arr) {
    const items = arr.split(',');
    items.shift();
    items.pop();
    if (items.length === 0) {
        return null;
    }
    return items.join(' ');
}
