class Employee
{
  id: number;
  name: string;
  dept:string;
  designation : string;
  constructor (id:number, name : string, dept: string, designation : string)
   {   
	this.id = id;
	this.name = name;
	this.dept = dept;
	this.designation = designation;
   }
  
  display(): void
  {
     console.log ("ID: " + this.id + "    Name : "+this.name + "    Dept : "+ this.dept + "    Designation : "+this.designation);
  } }
class regular_employee extends Employee
{
   salary : number;
   
   constructor (id:number, name : string, dept: string, designation : string, salary: number)
   {  
     super(id,name,dept,designation);   
	this.salary = salary;
   }
   
   display(): void
   {
      super.display();
	  console.log ("Salary : " + this.salary);
   }
}
class contract_employee extends Employee
{
   days : number;
   perday:number;
   
   constructor (id:number, name : string, dept: string, designation : string, days: number,perday:number)
   {  
    super(id,name,dept,designation);   
	this.days=days
    this.perday= perday;
   }
   
   display(): void
   {
      super.display();
	  console.log ("Days : " + this.days+" Perday :"+ this.perday);
   }
}
var obj=new Employee(1,"sowmya","IT","Technicaal Associate");
obj.display();
var obj1=new regular_employee(2,"Keerthi","CSE","Technicaal Associate",50000);
obj1.display();
var obj2=new contract_employee(3,"Priya","IT","Associate",10,1000);
obj2.display();
