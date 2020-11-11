
function findMatching(drivers, str) {
  let matches = drivers.filter(driver => {
    return driver.toLowerCase() === str.toLowerCase()
  })
  return matches
}

function fuzzyMatch(drivers, str){
  return drivers.filter(driver => {
    return driver[0] === str[0]
  })
}

function matchName(drivers, str){ 
  return drivers.filter(driver => {
    return driver.name == str
  })
}