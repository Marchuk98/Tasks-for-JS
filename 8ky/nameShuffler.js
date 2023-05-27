function nameShuffler(str) {
    const [firstName, lastName] = str.split(" ");
    return `${lastName} ${firstName}`;
}