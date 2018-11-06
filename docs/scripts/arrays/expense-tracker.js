const account = {
    name: 'Wonmi Kwon',
    expenses: [],
    incomes: [],
    addExpense: function (description, amount) {
        const newExpense = {
            description: description,
            amount: amount
        }
        this.expenses.push(newExpense)
    },
    addIncome: function (description, amount) {
        const newIncome = {
            description: description,
            amount: amount
        }
        this.incomes.push(newIncome)
    },
    getAccountSum: function () {
        let totalExpense = 0,
            totalIncome = 0,
            total = 0
        this.expenses.forEach(function (el) {
            totalExpense = totalExpense + el.amount
        })
        this.incomes.forEach(function (el) {
            totalIncome = totalIncome + el.amount
        })
        return total = totalIncome - totalExpense
    }
}

account.addExpense('Bought iphone', 1000)
account.addExpense('Got coffee', 2)
account.addIncome('Job', 2000)
console.log(account)
console.log(account.getAccountSum())

// --------------------------Why failed?--------------------------
// const getAccountSum = function () {
//     let total = 0
//     for(let i = 0; account.expenses[i] < account.expenses.length; i++) {
//         total = total + account.expenses[i].amount
//     }
//     return total;
// }
////----------------------------------------------------


// Expense -> description, amount
// addExpense -> description, amount
// getAccountSum -> total up all expenses -> 'Wonmi Kwon has $1250 in expenses.


