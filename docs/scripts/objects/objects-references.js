let mimiAccount = {
    name: "Woshmi",
    expense: 0,
    income: 0
}

let joshAccount = {
    name: "Shugoi",
    expense: 0,
    income: 0
}

let addExpense = function (account, expense) {
    account.expense = account.expense + expense
}

let addIncome = function (account, income) {
    account.income = account.income + income
}

let resetAccount = function (account) {
    account.expense = 0
    account.income = 0
}

let getAccountSum = function (account) {
    let total = account.income - account.expense
    return `Account for ${account.name} has ${total}. ${account.income} in income, ${account.expense} in expenses.` 
}

addExpense(mimiAccount, 200)
addIncome(mimiAccount, 1000)
console.log(getAccountSum(mimiAccount))
resetAccount(mimiAccount)
console.log(getAccountSum(mimiAccount))
