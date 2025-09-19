//Creating functions and while loops 
//Getting the given numbers in reverse
let num=12345
function RevNumber(num){
   let reverseNum=0;
   while(num>0){
    reverseNum*=10;
    reverseNum+=(num%10);
    num=Math.floor(num/10);

   }
   return reverseNum;   
}
console.log("The reverse number of given numbers are : "+RevNumber(num));

//Getting the total value of the given numbers one by one(1234=1+2+3+4)
function SumOfNum(num){
   let sumNum=0;
   while(num>0){
      sumNum+=(num%10);
      num=Math.floor(num/10);
   }
   return sumNum;
}
console.log("The summation of the given number is: "+SumOfNum(num));

//Re adding the numbers until its value is in single digit 
function SummationUntilOneDigit(num){
   let sum=0;
   while(num>0){
      sum+=(num%10);
      num=Math.floor(num/10);
   }
   if(sum<10)
      return sum;
   
   else
      return SummationUntilOneDigit(sum);
}
console.log("The summation number until it is a one digit is: "+SummationUntilOneDigit(num));

