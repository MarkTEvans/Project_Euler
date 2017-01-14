var ta = 0;
var tb = 1;
var temp_sum = 0;
var even_sum = 0;

while (tb < 4000000)
{
  
  if (tb % 2 === 0 )
  {
    even_sum += tb;
  }
  
  temp_sum = ta + tb;
  ta = tb;
  tb = temp_sum;

  console.log(ta, tb, even_sum);
  
}

console.log(even_sum);