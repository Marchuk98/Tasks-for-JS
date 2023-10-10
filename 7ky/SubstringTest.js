function SubstringTest(str1, str2)
{
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    for (let i = 0; i < str1.length - 1; i++) {
        for (let j = 0; j < str2.length - 1; j++) {
            if (str1[i] === str2[j]) {
                let k = 1;
                while (i + k < str1.length && j + k < str2.length && str1[i + k] === str2[j + k]) {
                    k++;
                }
                if (k > 1) {
                    return true;
                }
            }
        }
    }

    return false;
}