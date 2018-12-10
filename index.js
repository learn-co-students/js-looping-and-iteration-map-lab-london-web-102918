// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  let newDrivers = drivers.map(driver => driver.toLowerCase());
  return newDrivers;
}

function nameToAttributes(drivers) {
  return drivers.map(driver => {
    let newDriver = driver.split(" ");
      return {
        firstName: newDriver[0],
        lastName: newDriver[1]
      }
  })
}

function attributesToPhrase(drivers) {
  let newDrivers = drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
  return newDrivers
}
