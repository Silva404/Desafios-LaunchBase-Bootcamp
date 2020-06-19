//                                  Adicionar transações

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {
    transaction = {
        type: nType,
        value: 50.5
    }

    if (nType == 'credit') {
        user.balance += credit
    } else if (nType == 'debit') {
        user.balance = debit
    }

    

    user.transactions.push(transaction)
}

console.log(createTransaction(user))