class myClass
{
	data : number=7;
	constructor()
	{
	console.log("This is constructor");
	}
	returnData():number
	{
	return this.data;
	}
}
var obj=new myClass;
console.log("Data is :"+obj.returnData());