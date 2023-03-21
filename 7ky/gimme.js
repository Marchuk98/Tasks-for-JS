function gimme(triplet) {

    return triplet.indexOf([...triplet].sort((a, b) => b - a)[1])

}