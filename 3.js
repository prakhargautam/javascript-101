var n=600851475143;
var max=0;
for(var i=2; i<=n; i++)
{
    if(n%i===0)
    {
        n=n/i;
        max=i;
        console.log(i);
    }
}
console.log(max);
