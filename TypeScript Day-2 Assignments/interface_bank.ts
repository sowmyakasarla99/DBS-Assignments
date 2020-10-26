export interface IBank
{
  assign_data(acct_no:number, name:string, balance:number) : void;
  display():void;

}