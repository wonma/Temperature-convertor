// let fahrenheit = 50
// let celsius = (fahrenheit - 32) * 5 / 9
// let kelvin = (fahrenheit + 459.67) * 5 / 9

// console.log(celsius)
// console.log(kelvin)

let tempCalc = function (fahren, country) {
    let celsius = (fahren - 32) * 5 / 9
    let kelvin = (fahren + 459.67) * 5 / 9
    return {
        celsiusInfo : 'The celsius of fahrenheit ' + fahren + ' is ' + celsius + ' in ' + country + '.',
        kelvinInfo: 'The kelvin of fahrenheit ' + fahren + ' is ' + kelvin + ' in ' + country + '.'
    }
}

let tempListOfKorea = tempCalc(30, "Korea")
let tempListOfJapan = tempCalc(50, "Japan")


console.log(tempListOfKorea.celsiusInfo)
console.log(tempListOfJapan.kelvinInfo)



// Below is what my teacher coded.

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit - 32) * 5 / 9,
        celsius: (fahrenheit + 459.67) * 5 / 9
    }
}

let temps = convertFahrenheit(75)
console.log(temps.kelvin)


// He just created a function 'returning' an object with 3 pieces of temp info.
// Realized that I can simply use operation as a value of some property.


