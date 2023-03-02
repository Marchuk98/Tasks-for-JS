function position(letter){

    const positionString = letter.split('').map((el) => (el.charCodeAt(0) - 96).toString()).join('');

    return `Position of alphabet: ${positionString}`
}