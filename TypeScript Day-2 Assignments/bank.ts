interface IBank
{
  assign_data(acct_no:number, name:string, balance:number) : void;
  display():void;

}

class Bank implements IBank{

   private acct_no:number;
  private name:string;
  private balance : number;
  
  assign_data(acct_no:number, name:string, balance:number) : void
  {
     this.acct_no= acct_no;
	 this.name = name;
	 this.balance= balance;
  }
  
  display():void
    {console.log ("Acct_no : " + this.acct_no + "     name: "+ this.name + "    Balance : " + this.balance);}

}

var bankObj = new Bank();
bankObj.assign_data(101, "Chiranjeevi", 50000);
bankObj.display();
