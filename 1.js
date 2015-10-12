//Solution 1
//Multiples of 3 or 5

var sum=0;

for(var i=3; i<1000; i++)
{
    if(i%3===0)
        sum+=i;
    else if(i%5===0)
        sum+=i;
}

console.log(sum);