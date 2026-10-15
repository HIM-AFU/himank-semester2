class BankAccount {
    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance = this.balance + amount;
        console.log("Amount Deposited:", amount);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient Balance");
        } else {
            this.balance = this.balance - amount;
            console.log("Amount Withdrawn:", amount);
        }
    }
    displayBalance() {
        console.log("Account No:", this.accountNo);
        console.log("Holder Name:", this.holderName);
        console.log("Balance:", this.balance);
        console.log("----------------");
    }
    static bankInfo() {
        console.log("Bank Name: ABC Bank");
        console.log("Bank provides savings, deposits and withdrawal services.");
    }
}
let account1 = new BankAccount(101, "Himank", 5000);
let account2 = new BankAccount(102, "Rahul", 3000);
BankAccount.bankInfo();
account1.deposit(2000);
account1.withdraw(1000);
account1.displayBalance();
account2.deposit(1500);
account2.withdraw(5000);
account2.displayBalance();