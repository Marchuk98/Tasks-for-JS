function minSum(arr) {
    return arr.sort((a,b)=> a-b).reduce((acc,cur)=> acc + cur * arr.pop() ,0)
}