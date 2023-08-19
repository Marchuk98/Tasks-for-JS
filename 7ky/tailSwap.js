function tailSwap(arr) {
    let [head1, tail1] = arr[0].split(':');
    let [head2, tail2] = arr[1].split(':');

    return [head1 + ':' + tail2, head2 + ':' + tail1];
}