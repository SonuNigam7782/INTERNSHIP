class BankAccount {

    int accountNumber;
    String holderName;
    double balance;
    BankAccount() {
        this.accountNumber = 0;
        this.holderName = "Not Assigned";
        this.balance = 0;
        
        BankAccount(int accountNumber, String holderName, double balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }
    void deposit(double amount) {
        this.balance = this.balance + amount;
        System.out.println("Amount deposited: " + amount);
    }
        
    void withdraw(double amount) {
        if (amount <= this.balance) {this.balance = this.balance - amount;
            System.out.println("Amount withdrawn: " + amount);
        } else {
            System.out.println("Insufficient balance");
        }
    }
    void displayDetails() {
        System.out.println("Account Number: " + this.accountNumber);
        System.out.println("Holder Name: " + this.holderName);
        System.out.println("Balance: " + this.balance);
    }
}
    
class Test {
    public static void main(String[] args) {

        BankAccount acc1 = new BankAccount();
        acc1.displayDetails();

        System.out.println();
        
        BankAccount acc2 = new BankAccount(101, "Rahul", 5000);
        acc2.displayDetails();

        acc2.deposit(3000);
        acc2.withdraw(2500);

        System.out.println();
        acc2.displayDetails();
    }
}

