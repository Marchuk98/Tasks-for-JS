function quicksum(packet){
    if (/^[A-Z\s]+$/.test(packet)) {
        let sum = 0;
        for (let i = 0; i < packet.length; i++) {
            if (packet[i] === ' ') {
                sum += 0;
            } else {
                sum += (packet.charCodeAt(i) - 64) * (i + 1);
            }
        }
        return sum;
    } else {
        return 0;
    }
}