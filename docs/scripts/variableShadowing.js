let score = 5

// Declared function named 'getNewScoreMessage'
let getNewScoreMessage = function () {
    let score = 2
    return `Score: ${score}`
}

// Declared function call named 'printResult'
let printResult = getNewScoreMessage()

getNewScoreMessage() //this doesn't do anything, Why ?????
printResult         //this doesn't do anything, either Why ?????


// console.log(printResult)
console.log(score)