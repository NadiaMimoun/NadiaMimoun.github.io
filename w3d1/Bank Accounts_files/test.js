
account1=new Account(43);
 
 describe("getNumber", function () {
        it("", function () {
          assert.equal(43, account1.getNumber());
        }
        
        );
      });
      describe("getBalance", function () {
        it("", function () {
          assert.equal(12, account1.getBalance());
        });
      });
      account1.deposit(12);
      describe("getBalance after Deposit", function () {
        it("", function () {
          assert.equal(12, account1.getBalance());
        });
      });

      describe("Deposit throw exception", function () {
        it("", function () {
          assert.throws(() => account1.deposit(-12), RangeError);
        });
      });
      describe("withdraw throw exception greater than balance ", function () {
        it("", function () {
          assert.throws(() => account1.withdraw(-12), Error);
        });
      });
      describe("withdraw throw exception inferior of zero", function () {
        it("", function () {
          assert.throws(() => account1.withdraw(-12), RangeError);
        });
      });
      describe("toString1", function () {
        it("", function () {
          assert.equal("Account 43: balance 12", account1.toString());
        });
      });
      savingaccount1=new savingsaccount(3,12);
      describe("getInterest", function () {
        it("", function () {
          assert.equal(3, savingaccount1.getNumber());
          assert.equal(12, savingaccount1.getInterest());
        }
        
        );
      });
      savingaccount2=new savingsaccount(3,12);
      savingaccount2.setNumber(27);
      describe("getNumber", function () {
        it("", function () {
          assert.equal(27, savingaccount2.getNumber());
         
        }
        
        );
      });
     savingaccount1.deposit(34);
      describe("addInterest", function () {
        it("", function () {
          assert.equal(4.08, savingaccount1.addInterest());
         
        }
        
        );
      });
      describe("toString2", function () {
        it("", function () {
          assert.equal("Account 3: balance 4.08", savingaccount1.toString());
        });
      });
      checkingAccount1=new CheckingAccount(34,12);
     
      describe("checkingAccount getNumber", function () {
        it("", function () {
          assert.equal(34, checkingAccount1.getNumber());
         
        }
        
        );
      });
      
      describe("checkingAccount withdraw", function () {
        it("", function () {
          assert.throws(() => checkingAccount1.withdraw(-12), RangeError);
         
        }
        
        );
      });
      checkingAccount1.deposit(45);
      describe("toString3", function () {
        it("", function () {
          assert.equal("Account 34: balance 45", checkingAccount1.toString());
        });
      });

      bank =new Bank();
      let accountNumber=bank.addAccount()
      describe("AddAccount Test", function () {
        it("", function () {
          assert.equal(accountNumber,bank._Accounts[0]._number);
        });
      });

      bank.addSavingAccount(12)
      describe("AddSavingAccount Test", function () {
        it("", function () {
          assert.equal(12,bank._Accounts[1]._Interest);
        });
      });

      bank.addCheckingAccount(700)
      describe("AddCheckingAccount Test", function () {
        it("", function () {
          assert.equal(700,bank._Accounts[2]._Overdraft);
        });
      });

      let report=bank.accountReport()
      describe("reportAccount Test", function () {
        it("", function () {
          assert.notEqual(report,"");
        });
      });
