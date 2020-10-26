import student = require ("./interface_student")
class Student implements student.IStudent{

   private roll_no:number;
  private name:string;
  private phnno : number;
  
  assign_data(roll_no:number, name:string, phnno:number) : void
  {
     this.roll_no= roll_no;
	 this.name = name;
	 this.phnno= phnno;
  }
  
  display():void
    {console.log ("Roll_no : " + this.roll_no + "     name: "+ this.name + "    Phone No : " + this.phnno);}

}

var Obj = new Student();
Obj.assign_data(1, "Sowmya",7896542365);
Obj.display();
