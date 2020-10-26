var global:number=20;
class MyClass
{
	l:number=50;
	static static_var=60;
	local_data():number
	{
	var l:number=10;
	return l;
	}
}
console.log("global variable : "+global);
console.log("static variable : "+MyClass.static_var);
var myClass=new MyClass();
console.log("class variable : "+myClass.l);
console.log("local variable : "+myClass.local_data());

