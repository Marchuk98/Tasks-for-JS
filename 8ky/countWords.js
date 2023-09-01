function countWords(str) {

    let strSplit = str.trim().split(/\s+/)

    let strFilter = strSplit.filter(el => el.length > 0)

    return strFilter.length
}