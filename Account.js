const BankPassbook=require("./BankPassbook")

class Account{
    static AccountNumber=0

    constructor(userDeposit){
          this.userAccountNumber=Account.AccountNumber++
          this.userDeposit=userDeposit
          this.passbook=[]
       
    }

    deposite(balance)
    {
        //   this.userDeposit=this.userDeposit + balance
        //   let passbooks=new BankPassbook(new Date(),this.userDeposit,"deposite",this.userAccountNumber)
        //   this.passbook.push(passbooks)
        //   return new Account(this.userDeposit)
        let balance=0
        if(balance>=1000)
        {
            balance+=amount
            return balance
        }
        return "-1"
    }

    withdraw(balance){
        this.userDeposit=this.userDeposit-balance

    }

    getPassbook(){

    }
}
module.exports=Account
