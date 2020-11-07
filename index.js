const findMatching = (drivers, string) => {
    return drivers.filter(possibleMatch =>
        possibleMatch.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(possibleMatch => 
        possibleMatch.startsWith(string) === string.startsWith(string))
}

const matchName = (driver, string) => {
    return driver.filter(possibleMatch =>
        possibleMatch.name === string)
}