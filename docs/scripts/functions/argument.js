// create a line that tells you default user name and default score 0
// function : get user name and score
// returning a string
// do it with a user name Wonmi and default score 0 too.

// What if you give user name (first argument) with the second argument empty?
// or the other way,  how can I give empty argument in first and then score value in second argument?

// Real World Example :
//
// Game dash board , user name (default could be Newbie) , score (default can be 0)
// tip caculator , tip (default value could be 20%)

// [[[[[ Game dash board ]]]]]
let getUserInfo = function (user = 'newbie', score = 0) {
    return 
}

let printUserInfo1 = getUserInfo('Shugoi')
let printUserInfo2 = getUserInfo('Woshmi', 50)
let printUserInfo3 = getUserInfo()

// console.log(printUserInfo3)


// [[[[[ Tip Calculator ]]]]]
let tipCalculator = function (total, percentage = .1) {
   return 'Your total is ' + total + ' and the tip is ' + total * percentage + '.'
}

let customer1 = tipCalculator(100)
let customer2 = tipCalculator(100, .2)

console.log(customer1)
console.log(customer2)
