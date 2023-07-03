function tapCodeTranslation(text) {
    const tapCodesMap = {
        A: ". .",
        B: ". ..",
        C: ". ...",
        D: ". ....",
        E: ". .....",
        F: ".. .",
        G: ".. ..",
        H: ".. ...",
        I: ".. ....",
        J: ".. .....",
        K: ". ...",
        L: "... .",
        M: "... ..",
        N: "... ...",
        O: "... ....",
        P: "... .....",
        Q: ".... .",
        R: ".... ..",
        S: ".... ...",
        T: ".... ....",
        U: ".... .....",
        V: "..... .",
        W: "..... ..",
        X: "..... ...",
        Y: "..... ....",
        Z: "..... ....."
    };

    const tapCodes = [];
    for (let i = 0; i < text.length; i++) {
        const letter = text[i].toUpperCase();
        const tapCode = tapCodesMap[letter];
        tapCodes.push(tapCode);
    }

    return tapCodes.join(" ");
}