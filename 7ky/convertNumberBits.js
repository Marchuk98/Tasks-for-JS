// extend all numbers with toBits()
Number.prototype.toBits = function(length = 8) {
    return this.toString(2).padStart(length, '0');
}