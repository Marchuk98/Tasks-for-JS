function wasCalledWithNew() {
    const result =
        this instanceof wasCalledWithNew && Object.getPrototypeOf(this) === wasCalledWithNew.prototype;

    return {
        valueOf: function () {
            return result;
        },
    };
};