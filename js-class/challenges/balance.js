const users = [{
    userName: "Sálvio",
    incomes: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
}, {
    userName: "Márcio",
    incomes: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]  
}, {
    userName: "Lúcia",
    incomes: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9]
}]

function calculatesBalance(income, expense) {
    const incomes = sumNumbers(income)
    const expenses = sumNumbers(expense)

    return expenses - incomes
}

function sumNumbers(number){
    var sum = 0;
    for (let i = 0; i < number.length; i++){
        sum += number[i]
    }
    return sum
}

for (let i = 0; i < users.length; i++){
    const balance = (calculatesBalance(users[i].incomes, users[i].expenses)).toFixed(2)

    if (balance > 0){
        console.log(`${users[i].userName} has the positive balance of ${balance} `)
    } else {
        console.log(`${users[i].userName} has the negative balance of ${balance} `)
    }
}