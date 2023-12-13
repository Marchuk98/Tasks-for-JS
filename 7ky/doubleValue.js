class Class {
    static previousValue = 1;

    static getNumber() {
        const currentValue = this.previousValue;
        this.previousValue *= 2;
        return currentValue;
    }
}