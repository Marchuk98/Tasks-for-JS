function HQ9(code) {
    if (code === 'H') {
        return 'Hello World!';
    } else if (code === 'Q') {
        return 'Q';
    } else if (code === '9') {
        let lyrics = '';
        for (let i = 99; i > 0; i--) {
            let next = i - 1;
            let bottle = i === 1 ? 'bottle' : 'bottles';
            let nextBottle = next === 1 ? 'bottle' : 'bottles';
            lyrics += `${i} ${bottle} of beer on the wall, ${i} ${bottle} of beer.\n`;
            if (next === 0) {
                lyrics += `Take one down and pass it around, no more bottles of beer on the wall.\n`;
            } else {
                lyrics += `Take one down and pass it around, ${next} ${nextBottle} of beer on the wall.\n`;
            }
        }
        lyrics += `No more bottles of beer on the wall, no more bottles of beer.\n`;
        lyrics += `Go to the store and buy some more, 99 bottles of beer on the wall.`;
        return lyrics;
    }
}