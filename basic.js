var secretnumber=4;
var number=Number(prompt("enter number"));
isfalse=false;
while(!isfalse)
{
if(secretnumber==number)
{
    alert("you are absolutly correct");
    isfalse=true;
}
else
{
    var number=prompt("sorry ,you next change ,enter number");
    isfalse=false;
}
}