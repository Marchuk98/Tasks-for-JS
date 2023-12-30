function volume(r,h) {
    const pi = Math.PI;
    const coneVolume = (1/3) * pi * r**2 * h;
    return Math.floor(coneVolume);
}