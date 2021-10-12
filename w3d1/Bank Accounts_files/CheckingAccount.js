class CheckingAccount extends Account{
    constructor(number,over) {
        super(number);
        this._Overdraft=over;
      }
      getNumber() {
        return this._number;
    }
    getOverdraft() {
        return this._Overdraft;
    }
    setNumber(num) {
        this._number=num;
    }
    setInterest(over) {
        this._Overdraft=over;
    }
    withdraw(over){
        super.withdraw(over);
    }
    deposit(amount){
        super.deposit(amount);
    }

}