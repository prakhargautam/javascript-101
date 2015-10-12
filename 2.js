//Solution 2
//Even Fibonacci Numbers
var a=0;
var b=1;
var c=0;
sum=0;

while(c<=4000000)
{
    c=a+b;
    if(c%2===0)
        sum+=c;
    a=b;
    b=c;
}

console.log(sum);