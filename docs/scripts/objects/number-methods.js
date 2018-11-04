// MDN number
// let num = 103.3049830941000

// console.log(num.toFixed(3))


// MND Math
// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))

// let randomNum = Math.random()
// console.log(randomNum)
// 0 - .99999





// let min = 10
// let max = 20
// let randomNum = Math.round(Math.random() * (max - min + 1)) + min
// console.log(randomNum)

// The logic behind
// let randomNum = Math.random() * (max - min)
// 0 - 9.99999

// let randomNum = Math.random() * (max - min + 1)
// 0 - 10.99999

// let randomNum = Math.round(Math.random() * (max - min + 1))
// 0 - 10

// let randomNum = Math.round(Math.random() * (max - min + 1)) + min
// 10 - 20

// Flipping a coin
// let min = 0
// let max = 1
// let randomNum = Math.round(Math.random() * (max - min + 1)) + min
// console.log(randomNum)


// Guessing Game
// Number range : 1 - 5

let guessNum = function (number) {
    let min = 1
    let max = 5
    if (randomNum === number) {
        return `You got it! You got 100 point!`
    } else {
        return `It was ${randomNum}.. please pay 1 dollar and try again!`
    }
}

console.log(guessNum(3))