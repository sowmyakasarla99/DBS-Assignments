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
  } 
}
var obj=new Employee(1,"sowmya","IT","Technicaal Associate");
obj.display();

