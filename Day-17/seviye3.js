const personAccount = {
    firstName: 'Anıl',
    lastName: 'Sezgin',
    incomes: {
        'Software': 50000,
        'Passive': 1000,
    },
    expenses: {
        'Hamburgers': 5000,
        'Music': 1000,
    },
    totalExpense: function(){
        const keys = Object.keys(this.expenses);
        return keys.map(key => parseInt(this.expenses[key])).reduce((a,b)=> a+b, 0)
    },
    totalIncome: function(){
        const keys = Object.keys(this.incomes);
        return keys.map(key => parseInt(this.incomes[key])).reduce((a,b)=> a+b, 0)
    },
    accountInfo: function(){
        return `Acc Name: ${this.firstName} ${this.lastName} \nTotal Income: ${this.totalIncome()} \nTotal Expenses: ${this.totalExpense()}`
    },
    addIncome: function(description, income){
        if(description === undefined || income === undefined) return 'Provide valid values'

        this.incomes[description] = income;
        return 'Income has been added';
    },
    addExpense: function(description, expense){
        if(description === undefined || expense === undefined) return 'Provide valid values'

        this.expenses[description] = expense;
        return 'Expense has been added';
    },
    accountBalance: function(){
        const totalBalance = this.totalIncome() - this.totalExpense();
        return `Account Balance: ${totalBalance}`
    },
}

console.log(personAccount.totalIncome()) 
console.log(personAccount.totalExpense())
console.log(personAccount.accountBalance()) 
console.log(personAccount.addIncome('Bonus', 5000)) 
console.log(personAccount.addExpense('Shopping', 2000)) 
console.log(personAccount.accountBalance())
console.log(personAccount.addExpense())