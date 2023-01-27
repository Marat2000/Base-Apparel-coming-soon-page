var button=document.getElementById('arrow');
var input=document.getElementById('input');
var invalid=document.getElementById('invalid');
var error=document.getElementById('error');
var invalidSymbols=["&","=","+","<",">",","];
var requiredSymbols=[".","@"];


error.style.opacity=0;
invalid.style.opacity=0;
input.style.border="hsl(0, 36%, 70%) 0.15rem solid";


button.onclick=function()

{	 

var		a=/^([a-zA-Z0-9\.]+)@([a-zA-Z0-9\.]+)\.([a-zA-Z\.]+)$/.test(input.value);

if(a==true)
{error.style.opacity=0;
invalid.style.opacity=0;
input.style.border="hsl(0, 36%, 70%) 0.15rem solid";
}
else
{error.style.opacity=1;
invalid.style.opacity=1;
input.style.border="hsl(0, 93%, 68%) 0.15rem solid";
}
}