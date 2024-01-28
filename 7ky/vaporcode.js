function vaporcode(string) {

    const formattedString = string.toUpperCase().replace(/\s/g, '');

    const vaporWaveString = formattedString.split('').join('  ');

    return vaporWaveString;
}