function collatz(n)
    {
console.log("Your Input is " +n +"\n\n");
 do{
    if(n%2==0)
    {
      console.log(n +"/2 = " +n/2 +"\n");
      n=n/2;
    }
    else
    {
      console.log(n +"*3+1 = " +(n*3+1) +"\n");
      n=(n*3+1);
    }
   }
   while(n!=1);
   console.log("1*3+1 = 4\n\n4/2 = 2\n\n2/2 = 1\n\n");
   console.log("And it goes on and on and on!!");
                   }
console.log(collatz (99));
