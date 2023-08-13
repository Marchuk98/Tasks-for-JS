function dropCap(n) {
    return n.split(' ').map(word => {
        if (word.length > 2) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return word;
    }).join(' ');
}