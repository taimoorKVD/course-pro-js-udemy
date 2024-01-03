// ***
// Topic: Bank Account || Pro JS | 3rd Jan, 2024 | Udemy | Mohammad Taimoor Hussain
// ***

class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {

        if(!Number.isFinite(balance)) {
            throw new Error(`Invalid balance amount: ${balance}`)
        }

        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        if(!Number.isFinite(amount) || amount <= 0) {
            throw new Error(`Invalid entered amount: ${amount}`)
        }

        this.balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if(!Number.isFinite(amount) || amount <= 0) {
            throw new Error(`Invalid entered amount: ${amount}`)
        }

        if (amount > this.balance) {
            return console.log('Insufficient Balance.');
        }

        this.balance -= amount;
        console.log(`Withdrawn: $${amount}. New balance: $${this.balance}`);
    }

    generateInvoice() {
        console.log(`
            Account Number: ${this.accountNumber},
            Account Holder: ${this.accountHolder},
            Balance: ${this.balance}
        `);
    }
}