const user = {
    userName: "Mariana",
    transactions: [],
    balance: 0
}

function createTransaction(transact) {
    user.transactions.push(transact)

    if (transact.type == 'credit') {
        return user.balance = transact.value + user.balance
    } else {
        return user.balance = user.balance - transact.value
    }
}

createTransaction({ type: "credit", value: 50 })
createTransaction({ type: "credit", value: 120 })
createTransaction({ type: "debit", value: 80 })
createTransaction({ type: "debit", value: 30 })

function getHigherTransactionByType(type) {
    let highestTransaction
    let higherValue = 0

    for (let i = 0; i < user.transactions.length; i++) {
        if (user.transactions[i].type == type && user.transactions[i].value > higherValue) {
            highestTransaction = user.transactions[i].value
            highestTransaction = user.transactions[i]
        }
    }
    return highestTransaction
}

function getTheAverageValueOfTransactions() {
    let sum = 0

    for (let i = 0; i < user.transactions.length; i++) {
        sum += user.transactions[i].value
    }

    return sum / user.transactions.length
}

function getTransactionsCount() {
    let countCredit = 0
    let countDebit = 0

    for (let i = 0; i < user.transactions.length; i++)
        if (user.transactions[i].type == "credit") {
            countCredit++
        } else {
            countDebit++
        }

    return user.amount = { credit: countCredit, debit: countDebit }
}

console.log(getHigherTransactionByType("credit"))
console.log(getTheAverageValueOfTransactions())
console.log(getTransactionsCount())
