function findMatching(drivers, request) {
    let match = drivers.filter(driver => {
        if (driver === request || driver === request.toLowerCase()) {
            return driver
        }
    });
    return match
}

function fuzzyMatch(drivers, request) {
    let match = drivers.filter(driver => {
        return driver.startsWith(request)
    })
    return match
}

function matchName(drivers, request) {
    let match = drivers.filter(driver => {
        return driver.name === request
    })
    return match
}