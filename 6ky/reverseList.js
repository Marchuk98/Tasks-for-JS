function reverseList(list) {
    let reversed = null;

    while (list !== null) {
        reversed = [list[0], reversed];
        list = list[1];
    }

    return reversed;
}