class Bank{
    static nextNumber=0;
    static publisher = "Ilya Kantor";
    constructor() {
        this._Accounts=[];

      }



      
      addAccount() {
        let account = new Account(Math.random())
        this._Accounts.push(account);
        return account._number;
    }

       addSavingAccount(interest) {
        let account = new savingsaccount(Math.random(),interest)
        this._Accounts.push(account);
        return account._number;
    }

    addCheckingAccount(overdraft) {
        let account = new CheckingAccount(Math.random(),overdraft)
        this._Accounts.push(account);
        return account._number;
    }
    closeAccount(number){
        for (let i=0;i<this._Accounts.length;i++){
            if(this._Accounts[i]._number===number){
                this._Accounts.splice(i,1);
            }
        }
    }

    accountReport(){
        let report =""
        while(Bank.nextNumber<this._Accounts.length){
            report+=Bank.nextNumber + ") "+this._Accounts[Bank.nextNumber].toString()+"\n"
            Bank.nextNumber++;
        }

        return report;
    }



}