// Global scope (changeFtoC, tempOne, tempTwo)
    // Local scope (fahren, celsius)
        // Local scope (isFreezing)


// [CAUTION]
// fahren is an argument, it's bound to Local scope,
// even though it's out side of curly bracket. 

let changeFtoC = function (fahren) {
    let celsius = (fahren - 32) * 5 / 9

    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius
}

let tempOne = changeFtoC(68)
let tempTwo = changeFtoC(40)

console.log(tempOne)
console.log(tempTwo)

