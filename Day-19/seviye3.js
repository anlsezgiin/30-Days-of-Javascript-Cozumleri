function personAccount(fname, lname){
    let firstName = fname,
        lastName = lname,
        incomes = new Map(),
        expenses = new Map(),
        totalExpense = 0,
        totalIncome = 0;


    function addIncome(description, amount){
        if(amount<1) return 'Amount must be greater than zero';
    
        incomes.set(description, amount)
        totalIncome+=amount;
        return `${description} added to incomes` 
    }

    function addExpense(description, amount){
        if(amount<1) return 'Amount must be greater than zero';
        if(amount>accountBalance()) return 'Not enough balance in your Account';

        expenses.set(description, amount)
        totalExpense+=amount;
        return `${description} added to expenses`;
    }

    function accountBalance(){
        return totalIncome - totalExpense;
    }

    function accountInfo(){
        let info = `${firstName} ${lastName}'s Account\n`;

        info+='Income :\n';
        for (const [description, amount] of incomes.entries()) {
            info+=` ${description} - ${amount} \n`
        }
        info+=`Total Income: ${totalIncome}\n\n`;

        info+='Expenses: \n'
        for (const [description, amount] of expenses.entries()) {
            info+=` ${description} - ${amount} \n`
        }
        info+=`Total Expenses: ${totalExpense}\n\n`;
        info+=`Account Balance: ${accountBalance()}`;

        return info;
    }



    return {
        addIncome,
        addExpense,
        accountBalance,
        accountInfo
    }
}

const devAnkoAcc = personAccount('Anıl', 'Sezgin');

console.log(devAnkoAcc.addIncome('Salary', 50000));
console.log(devAnkoAcc.addIncome('Passive', 5000));
console.log(devAnkoAcc.addExpense('Rent', 5000));
console.log(devAnkoAcc.addExpense('Broadband', 1000));
console.log(devAnkoAcc.accountInfo());