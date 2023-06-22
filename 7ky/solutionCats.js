function solution(start, finish) {
    if (start === finish) {
        return 0;
    }

    var jumps = 0;
    while (start < finish) {
        if ((finish - start) <= 2) {
            jumps++;
            break;
        }
        jumps++;
        start += 3;
    }

    return jumps;
}