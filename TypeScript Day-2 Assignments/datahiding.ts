class Bank
{
  private acct_no:number;
  private name:string;
  private balance : number;
  
  constructor(acct_no:number, name:string, balance:number)
  {
     this.acct_no= acct_no;
	 this.name = name;
	 this.balance= balance;
  }
  
  display():void
  {
    console.log ("Acct_no : " + this.acct_no + " name: "+ " Balance : " + this.balance);
  }
  

}

var bankObj = new Bank(1002, "Charan", 50000);
bankObj.display();
//console.log ("Private data : "+bankObj.acct_no);
