// Code your solution here
function findMatching(drivers, string){
  return drivers.filter(function(d){
   return d.toUpperCase() === string.toUpperCase()
 })
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function(d){
    return d.startsWith(string)
  })
}

function matchName(drivers, name){
  return drivers.filter(function(d){
    return d.name === name
  })
}