const user = {
    userName: "Mariana",
    transactions: [],
    balance: 0
}

const transaction = {
    type: 'debit',
    value: 50.5
}

function createTransaction(transact) {
    user.transactions.push(transact)

    if (transact.type == 'credit') {
        return user.balance = transact.value + user.balance
    } else {
        return user.balance = user.balance - transact.value
    }
}

createTransaction({ type: "credit", value: 50})
createTransaction({ type: "credit", value: 120})
createTransaction({ type: "debit", value: 80})
createTransaction({ type: "debit", value: 30})

console.log(user)
console.log(user.balance)