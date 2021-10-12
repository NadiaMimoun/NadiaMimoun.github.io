class savingsaccount extends Account{
    constructor(number, inter) {
        super(number);
        this._Interest = inter;
      }
      getNumber() {
        return this._number;
    }
    getInterest() {
        return this._Interest;
    }
    setNumber(num) {
        this._number=num;
    }
    setInterest(inter) {
        this._number=inter;
    }
    addInterest(){
        return this._balance=this.getBalance()*this.getInterest()/100;
    }
   

}