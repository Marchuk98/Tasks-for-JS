function abbrevName(name) {

    let line = name.split(' ')
    let firstword = line[0].charAt(0).toUpperCase()
    let secondword = line[1].charAt(0).toUpperCase()

    return `${firstword}.${secondword}`
}