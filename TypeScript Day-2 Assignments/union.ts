var t:number;
var r:number;
var sum:number=0;
function dataType(n:number|string):void
{
	if(typeof n=="number")
	{
		t=n;
		while(n>0)
		{
			r=(n%10);    
			sum=(sum*10)+r;    
			n=Math.floor(n/10); 	
		}
		if(t==sum)
			console.log(t+" is a palindrome");
		else
			console.log(t+" is not a palindrome");
	}    
	else
	{
		var splitString = n.split("");
        var reverseArray = splitString.reverse(); 
        var joinArray = reverseArray.join("")
		if(n==joinArray)
			console.log(n+" is a palindrome");
		else
			console.log(n+" is not a palindrome");
	}
}
dataType(787);
dataType("aba");
	