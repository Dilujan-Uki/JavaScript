//Print the number in Reverse
let num = 153
function GetrevNumber(num){
   let revNum=0;
   let count=0
   while(num>0){
    revNum= (revNum*10)+(num%10);
    num=Math.floor(num/10);
    count++;
   }
   console.log("Total itteration is "+count)
   return revNum
}
console.log("The reverse number of "+num+ " is "+GetrevNumber(num));    