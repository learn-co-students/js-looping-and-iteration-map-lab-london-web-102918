function lowerCaseDrivers(drivers) {
    return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
    return drivers.map(driver => {
        let driverNew = driver.split(' ');
            return {
                firstName: driverNew[0],
                lastName: driverNew[1]
            }
    })
}

function attributesToPhrase(drivers){
    return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}
