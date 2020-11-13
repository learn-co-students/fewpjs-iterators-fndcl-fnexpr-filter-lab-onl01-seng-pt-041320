// Code your solution here
function findMatching(drivers, name) {
    const newDrivers = drivers.filter(driver => {return driver.toLowerCase() === name.toLowerCase()})
    return newDrivers
}

function fuzzyMatch(drivers, string){
    const newDrivers = drivers.filter(driver => {
        return driver.substring(0, string.length) === string})
    return newDrivers
}
    
function matchName(drivers, string){
    const newDrivers = drivers.filter(driver => {
        return driver.name === string
    })
    return newDrivers
}

