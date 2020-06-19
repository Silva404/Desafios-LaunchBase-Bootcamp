//                                  Adicionar transações

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {


    user.transactions.push(transaction)
}
