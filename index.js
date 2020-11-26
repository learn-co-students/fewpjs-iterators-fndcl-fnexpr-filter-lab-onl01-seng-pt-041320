// Code your solution here
function findMatching(drivers, string) {
    // console.log(drivers)
    return drivers.filter( driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( driver => {
        return driver.startsWith(string)
    })

}

function matchName(drivers, string) {
    return drivers.filter( driver => {
        return driver.name.startsWith(string)
    })
}