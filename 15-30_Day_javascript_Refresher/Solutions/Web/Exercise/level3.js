// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const personAccount = {
  firstName: "John",
  lastName: "Doe",
  incomes: [
    { description: "Salary", amount: 5000 },
    { description: "Bonus", amount: 2000 },
  ],
  expenses: [
    { description: "Rent", amount: 1000 },
    { description: "Groceries", amount: 500 },
  ],

  // Method to calculate total income
  totalIncome: function () {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  },


  totalExpense: function () {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  },

 
  accountInfo: function () {
    return `${this.firstName} ${this.lastName} has a total income of $${this.totalIncome()} and total expenses of $${this.totalExpense()}.`;
  },

  addIncome: function (description, amount) {
    this.incomes.push({ description, amount });
  },

  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
  },


  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};


personAccount.addIncome("Freelance", 1000);
personAccount.addExpense("Utilities", 300);

console.log(personAccount.accountInfo()); 
console.log("Account Balance:", personAccount.accountBalance()); 
