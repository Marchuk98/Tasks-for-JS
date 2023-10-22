function spinAround(turns) {
    let right_degrees = turns.filter(turn => turn === "right").length * 90;
    let left_degrees = turns.filter(turn => turn === "left").length * 90;
    let net_rotation = right_degrees - left_degrees;
    let rotations = Math.floor(Math.abs(net_rotation) / 360);
    return rotations;
}