// 1 (malesef var ve std eksik yapmayı beceremedim.)
class Istatiskiler
{
    constructor(ages)
    {
        this.ages=ages;
    }
    count(){
        return this.ages.length
    }

    sum(){
        const sumOfNumbers = this.ages.reduce((acc, cur) => acc+cur, 0)
        return sumOfNumbers;
    }

    min(){
        return Math.min(...this.ages)
    }

    max(){
        return Math.max(...this.ages)
    }

    sort(){
        return this.ages.sort((a, b) => {
            if(a>b) return 1;
            if(a<b) return -1;
            return 0
        })
    }

    range(){
        const sortedArray = this.sort(),
              range = sortedArray[sortedArray.length-1] - sortedArray[0]
        
        return range
    }

    mean(){
        const sum = this.sum(),
              count = this.count(),
              mean = Math.ceil(sum / count);
        
        return mean
    }

    median(){
        const count = this.count(),
              sortedArray = this.sort(),
              oddOrEven = count %2 === 0;

        let median;
        
        if(oddOrEven){
            median = sortedArray[count/2] - sortedArray[count/2+1]
        } else if(oddOrEven === false){
            median = sortedArray[Math.ceil(count/2)-1]
        }

        return median;
    }

    mode(){
        const count = this.count,
              sortedArray = this.sort();
              
        let seperatedArray = [];
        
        let sentence = sortedArray.join();

        seperatedArray = sortedArray.map(num => {
            const regEx = new RegExp(num, 'g');
            return {
                mode: num,
                count: sentence.match(regEx).length
            }
        })

        const mode = seperatedArray.sort((a, b)=>{
            if(a.count>b.count) return -1;
            if(a.count<b.count) return 1;
            return 0
        })

        return mode[0]
    }
}
const st = new Istatiskiler([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])

console.log('Count:', st.count())           
console.log('Sum: ', st.sum())              
console.log('Min: ', st.min())              
console.log('Max: ', st.max())              
console.log('Range: ', st.range())          
console.log('Mean: ', st.mean())            
console.log('Median: ',st.median())         
console.log('Mode: ', st.mode())         
console.log("-------------------------------------------------------")           

// 2 (yine çok algılayamadığım bir soru, bir kısmında kopya çekmiş olabilirim (: )
// Ancak sevgili dostum şunu unutma ki bu egzersizlerdeki amaç içerik değil, öğrenmek. Mantığı kaptıysan kodla gitsin!

class PersonAccount {
    constructor(_firstName, _lastName) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.incomes = {}
        this.expenses = {}
    }

    addIncome(description, income) {
        if(description === undefined || income === undefined) return 'Provide valid values'

        this.incomes[description] = income;
        return 'Income has been added';
    }

    addExpense(description, expense) {
        if(description === undefined || expense === undefined) return 'Provide valid values'

        this.expenses[description] = expense;
        return 'Expense has been added';
    }

    get totalExpense(){
        const keys = Object.keys(this.expenses);
        return keys.map(key => parseInt(this.expenses[key])).reduce((a,b)=> a+b, 0)
    }

    get totalIncome(){
        const keys = Object.keys(this.incomes);
        return keys.map(key => parseInt(this.incomes[key])).reduce((a,b)=> a+b, 0)
    }

    get accountInfo(){
        return `Acc Name: ${this.firstName} ${this.lastName} \nTotal Income: ${this.totalIncome} \nTotal Expenses: ${this.totalExpense}`
    }

    get accountBalance(){
        const totalBalance = this.totalIncome - this.totalExpense;
        return `Account Balance: ${totalBalance}`
    }

}


const anilSezgin = new PersonAccount('Anıl', 'Sezgin');


console.log(anilSezgin.addIncome('Salary', 10000))
console.log(anilSezgin.addIncome('Passive', 5000))
console.log(anilSezgin.addExpense('Rent', 3000))
console.log(anilSezgin.addExpense('Food', 1000))
console.log(anilSezgin.incomes)
console.log(anilSezgin.expenses)
console.log(anilSezgin.totalExpense)
console.log(anilSezgin.totalIncome)
console.log(anilSezgin.accountInfo)
console.log(anilSezgin.accountBalance)