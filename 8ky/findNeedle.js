function findNeedle(haystack) {
    const index = haystack.indexOf("needle");
    return index >= 0 ? `found the needle at position ${index}` : "needle not found";
}