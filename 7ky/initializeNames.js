function initializeNames(name) {
    let names = name.split(' ');

    if (names.length <= 2) {
        return name;
    }

    for (let i = 1; i < names.length - 1; i++) {
        names[i] = names[i][0] + '.';
    }

    return names.join(' ');
}