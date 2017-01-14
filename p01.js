var i = 999;
var sum = 0;

while (i > 0)
{
  if (i % 3 === 0)
  {
    sum += i;
  }
  else if (i % 5 === 0)
  {
    sum += i;
  }
  
  i--;
}

console.log(sum);