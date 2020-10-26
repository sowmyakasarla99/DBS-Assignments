class Student
{
  private id:number=1;
  private name:string="Sowmya Reddy";
  private stream : string="IT";
  
  constructor(id:number, name:string, stream:string)
  {
     this.id= id;
	 this.name = name;
	 this.stream= stream;
  }
  
  display():void
  {
    console.log ("Id : " + this.id + " Name: "+this.name+" Stream : " + this.stream);
  }
  

}

var Obj = new Student(101, "Sowmya","Information Technology");
Obj.display();

