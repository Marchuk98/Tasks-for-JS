function countSquares(cuts){
    const totalCubes = (cuts + 1) ** 3;
    const noRedCubes = (cuts - 1) ** 3;
    const redCubes = totalCubes - noRedCubes;
    return redCubes;
}