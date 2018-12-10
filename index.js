// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const result = drivers.map(driver=> driver.toLowerCase())
  return result
}

function nameToAttributes(drivers) {
  return drivers.map(driver=> {
    let newDriver = driver.split(' ')
      return {firstName: newDriver[0], lastName: newDriver[1]}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}
