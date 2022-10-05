// Code your solution here
function findMatching(names, searchForName){
    return names.filter(driver => searchForName.toLowerCase() === driver.toLowerCase())
  }
  
  function fuzzyMatch(names, searchForStr){
    return names.filter(driver => driver.startsWith(searchForStr))
  }
  
  function matchName(names, nameOfStr){
    return names.filter(driver => driver.name === nameOfStr)
  } 