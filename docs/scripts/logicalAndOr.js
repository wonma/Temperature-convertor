// Let's offer food based on the number of vegan customers.


// let isVegan = 1
// let noVegan = 1

// if (isVegan && noVegan) {
//     console.log('고기와 야채')
// } else if (isVegan) {
//     console.log('야채')
// } else {
//     console.log('고기랑 야채')
// }



let guest1Vegan = false
let guest2Vegan = false
let guest3Vegan = true

if (guest1Vegan && guest2Vegan && guest3Vegan) {
    console.log('We have plenty of vegan foods!')
} else if(guest1Vegan || guest2Vegan || guest3Vegan) {
    console.log('We also have vegan food Enjoy our dishes')
} else {
    console.log('We want to offer anyfood!')
}