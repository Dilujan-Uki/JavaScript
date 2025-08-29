//write JavaScript programme for below tasks.

//Print factorial number for given Number
let fact=1;
let fact1=6;    
for(let j=1; j<=fact1; j++){
     fact=fact*j ;
     console.log(fact);
    
}

console.log(" ");
//Fibonacci Number 
console.log("The next one is FIBONACCI series");
function PrintFibonacci(num){
     if(num==1){
          return "0";
     }
     else if(num==2){
          return "0,1";
     }
     else if(2<num){
          seriesFibo="0,1";
          let a=0,b=1, c=1;
          for(let i=3; i<=num; i++){
               c=a+b;
               a=b;
               b=c; 
               seriesFibo+=(", "+c)
          }
          
     }
     console.log(seriesFibo);
     
}
PrintFibonacci(10);
