function color2grey(image) {
    return image.map(row =>
        row.map(pixel => {
            const average = Math.round((pixel[0] + pixel[1] + pixel[2]) / 3);
            return [average, average, average];
        })
    );
}