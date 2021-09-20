const user = {
    userName: "Mariana",
    transactions: [],
    balance: 0
}

const transaction = {
    type: 'credit',
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

createTransaction(transaction)

console.log(user)