var isAnagram = function (test, original) {
    const cleanTest = test.toLowerCase().replace(/[^a-z]/g, '');
    const cleanOriginal = original.toLowerCase().replace(/[^a-z]/g, '');
    const sortedTest = cleanTest.split('').sort().join('');
    const sortedOriginal = cleanOriginal.split('').sort().join('');
    return sortedTest === sortedOriginal;
};
