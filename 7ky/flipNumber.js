function flipNumber(n)
{
    let result = n.split('');
    for (let i = 0; i < result.length; i++) {
        result = result.slice(0, i).concat(result.slice(i).reverse());
    }
    return result.join('');
}