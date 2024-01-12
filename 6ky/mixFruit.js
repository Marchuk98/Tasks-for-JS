function mixFruit (arr) {
    const regularPrice = 5;
    const specialPrice = 7;
    const extraSpecialPrice = 9;

    const regularFruits = new Set(['banana', 'orange', 'apple', 'lemon', 'grapes']);
    const specialFruits = new Set(['avocado', 'strawberry', 'mango']);

    const totalPrice = arr.reduce((sum, fruit) => {
        const lowercaseFruit = fruit.toLowerCase();
        return sum + (regularFruits.has(lowercaseFruit) ? regularPrice : specialFruits.has(lowercaseFruit) ? specialPrice : extraSpecialPrice);
    }, 0);

    return Math.round(totalPrice / arr.length);
}
